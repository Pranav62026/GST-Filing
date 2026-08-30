
/* =========================================================
   MOCK DATA
   Replace these objects later with API responses.
   ========================================================= */

const dashboardData = {
    totalUsers: 1250,
    totalApplications: 875,
    pendingApplications: 126,
    approvedApplications: 684,
    rejectedApplications: 65
};

const applications = [
    {
        id:"GST-2026-00125",
        name:"Rahul Sharma",
        email:"rahul.sharma@example.com",
        date:"26 Aug 2026",
        service:"GST Registration",
        status:"pending"
    },
    {
        id:"GST-2026-00124",
        name:"Priya Singh",
        email:"priya.singh@example.com",
        date:"26 Aug 2026",
        service:"GST Return Filing",
        status:"approved"
    },
    {
        id:"GST-2026-00123",
        name:"Amit Kumar",
        email:"amit.kumar@example.com",
        date:"25 Aug 2026",
        service:"GST Registration",
        status:"approved"
    },
    {
        id:"GST-2026-00122",
        name:"Neha Verma",
        email:"neha.verma@example.com",
        date:"25 Aug 2026",
        service:"GST Amendment",
        status:"pending"
    },
    {
        id:"GST-2026-00121",
        name:"Vikash Gupta",
        email:"vikash.gupta@example.com",
        date:"24 Aug 2026",
        service:"GST Registration",
        status:"rejected"
    },
    {
        id:"GST-2026-00120",
        name:"Anjali Kumari",
        email:"anjali.kumari@example.com",
        date:"24 Aug 2026",
        service:"GST Return Filing",
        status:"approved"
    }
];

const users = [
    {
        name:"Anjali Kumari",
        email:"anjali.kumari@example.com",
        date:"26 Aug 2026",
        status:"active"
    },
    {
        name:"Rohit Singh",
        email:"rohit.singh@example.com",
        date:"25 Aug 2026",
        status:"active"
    },
    {
        name:"Neha Verma",
        email:"neha.verma@example.com",
        date:"25 Aug 2026",
        status:"active"
    },
    {
        name:"Vikash Gupta",
        email:"vikash.gupta@example.com",
        date:"24 Aug 2026",
        status:"inactive"
    },
    {
        name:"Priya Singh",
        email:"priya.singh@example.com",
        date:"24 Aug 2026",
        status:"active"
    }
];

/* =========================================================
   HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

function escapeHTML(value){
    return String(value)
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
}

function showToast(title,text){
    $("toastTitle").textContent = title;
    $("toastText").textContent = text;
    $("toast").classList.add("show");

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        $("toast").classList.remove("show");
    },3000);
}

function statusLabel(status){
    return status.charAt(0).toUpperCase() + status.slice(1);
}

/* =========================================================
   SUMMARY CARDS
   ========================================================= */

function updateSummary(){
    $("totalUsers").textContent = dashboardData.totalUsers.toLocaleString("en-IN");
    $("totalApplications").textContent = dashboardData.totalApplications.toLocaleString("en-IN");
    $("pendingApplications").textContent = dashboardData.pendingApplications.toLocaleString("en-IN");
    $("approvedApplications").textContent = dashboardData.approvedApplications.toLocaleString("en-IN");
    $("rejectedApplications").textContent = dashboardData.rejectedApplications.toLocaleString("en-IN");
}

/* =========================================================
   RECENT APPLICATIONS
   ========================================================= */

function renderApplications(list){
    const body = $("applicationsBody");

    if(!list.length){
        body.innerHTML = `
            <tr>
                <td colspan="6">
                    <div class="empty">No applications match your search.</div>
                </td>
            </tr>
        `;
        return;
    }

    body.innerHTML = list.map(app => `
        <tr>
            <td><span class="id">${escapeHTML(app.id)}</span></td>
            <td>
                <div class="name">${escapeHTML(app.name)}</div>
                <div class="sub">${escapeHTML(app.email)}</div>
            </td>
            <td>${escapeHTML(app.date)}</td>
            <td>${escapeHTML(app.service)}</td>
            <td><span class="badge ${escapeHTML(app.status)}">${statusLabel(escapeHTML(app.status))}</span></td>
            <td>
                <button class="action" onclick="viewApplication('${escapeHTML(app.id)}')">
                    View Details →
                </button>
            </td>
        </tr>
    `).join("");
}

function filterApplications(){
    const query = $("applicationSearch").value.trim().toLowerCase();
    const status = $("applicationStatusFilter").value;

    const filtered = applications.filter(app => {
        const matchesQuery =
            !query ||
            app.id.toLowerCase().includes(query) ||
            app.name.toLowerCase().includes(query) ||
            app.email.toLowerCase().includes(query) ||
            app.service.toLowerCase().includes(query);

        const matchesStatus =
            status === "all" || app.status === status;

        return matchesQuery && matchesStatus;
    });

    renderApplications(filtered);
}

function viewApplication(id){
    const app = applications.find(item => item.id === id);

    if(!app) return;

    showToast(
        "Application Details",
        `${app.id} • ${app.name} • ${statusLabel(app.status)}`
    );
}

/* =========================================================
   RECENT USERS
   ========================================================= */

function renderUsers(){
    const body = $("usersBody");

    if(!users.length){
        body.innerHTML = `
            <tr>
                <td colspan="5">
                    <div class="empty">No users available.</div>
                </td>
            </tr>
        `;
        return;
    }

    body.innerHTML = users.map(user => `
        <tr>
            <td><span class="name">${escapeHTML(user.name)}</span></td>
            <td>${escapeHTML(user.email)}</td>
            <td>${escapeHTML(user.date)}</td>
            <td><span class="badge ${escapeHTML(user.status)}">${statusLabel(escapeHTML(user.status))}</span></td>
            <td>
                <button class="action" onclick="viewUser('${escapeHTML(user.email)}')">
                    View Profile →
                </button>
            </td>
        </tr>
    `).join("");
}

function viewUser(email){
    const user = users.find(item => item.email === email);
    if(!user) return;

    showToast(
        "User Profile",
        `${user.name} • ${user.email}`
    );
}

/* =========================================================
   APPLICATION STATISTICS CHART
   Pure HTML/CSS chart; no external library required.
   ========================================================= */

function renderChart(){
    const values = [
        {label:"Total",value:dashboardData.totalApplications,type:"total"},
        {label:"Pending",value:dashboardData.pendingApplications,type:"pending"},
        {label:"Approved",value:dashboardData.approvedApplications,type:"approved"},
        {label:"Rejected",value:dashboardData.rejectedApplications,type:"rejected"}
    ];

    const max = Math.max(...values.map(item => item.value),900);

    $("bars").innerHTML = values.map(item => {
        const height = Math.max((item.value / max) * 100,3);

        return `
            <div class="bar-group">
                <div class="bar-value">${item.value.toLocaleString("en-IN")}</div>
                <div
                    class="bar ${item.type}"
                    style="height:${height}%"
                    title="${item.label}: ${item.value}"
                ></div>
                <div class="x-label">${item.label}</div>
            </div>
        `;
    }).join("");
}

/* =========================================================
   DATE
   ========================================================= */

function renderDate(){
    const now = new Date();

    $("currentDate").textContent =
        now.toLocaleDateString("en-IN",{
            weekday:"short",
            day:"numeric",
            month:"short",
            year:"numeric"
        });
}

/* =========================================================
   DEDICATED RECENT USERS VIEW
   ========================================================= */

function renderUsersView(){
    const active = users.filter(u => u.status === "active").length;
    const inactive = users.filter(u => u.status === "inactive").length;
    $("usersViewTotal").textContent = users.length.toLocaleString("en-IN");
    $("usersViewActive").textContent = active.toLocaleString("en-IN");
    $("usersViewInactive").textContent = inactive.toLocaleString("en-IN");
    filterUsersView();
}

function filterUsersView(){
    const query = $("userSearch") ? $("userSearch").value.trim().toLowerCase() : "";
    const status = $("userStatusFilter") ? $("userStatusFilter").value : "all";
    const filtered = users.filter(user => {
        const matchesQuery = !query || user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
        const matchesStatus = status === "all" || user.status === status;
        return matchesQuery && matchesStatus;
    });
    const body = $("usersViewBody");
    if(!filtered.length){
        body.innerHTML = `<tr><td colspan="5"><div class="empty">No users match your search.</div></td></tr>`;
        return;
    }
    body.innerHTML = filtered.map(user => `
        <tr>
            <td><span class="name">${escapeHTML(user.name)}</span></td>
            <td>${escapeHTML(user.email)}</td>
            <td>${escapeHTML(user.date)}</td>
            <td><span class="badge ${escapeHTML(user.status)}">${statusLabel(escapeHTML(user.status))}</span></td>
            <td><button class="action" onclick="viewUser('${escapeHTML(user.email)}')">View Profile →</button></td>
        </tr>
    `).join("");
}

/* =========================================================
   DEDICATED APPLICATION STATISTICS VIEW
   ========================================================= */

function renderStatisticsView(){
    const total = dashboardData.totalApplications;
    const approved = dashboardData.approvedApplications;
    const pending = dashboardData.pendingApplications;
    const rejected = dashboardData.rejectedApplications;
    $("statsViewTotal").textContent = total.toLocaleString("en-IN");
    $("statsViewPending").textContent = pending.toLocaleString("en-IN");
    $("statsViewApproved").textContent = approved.toLocaleString("en-IN");
    $("statsViewRejected").textContent = rejected.toLocaleString("en-IN");
    $("statsViewApprovalRate").textContent = total ? ((approved / total) * 100).toFixed(1) + "%" : "0%";
    $("statsViewPendingRate").textContent = total ? ((pending / total) * 100).toFixed(1) + "%" : "0%";

    const values = [
        {label:"Total",value:total,type:"total"},
        {label:"Pending",value:pending,type:"pending"},
        {label:"Approved",value:approved,type:"approved"},
        {label:"Rejected",value:rejected,type:"rejected"}
    ];
    const max = Math.max(...values.map(item => item.value),900);
    $("statsViewBars").innerHTML = values.map(item => {
        const height = Math.max((item.value / max) * 100,3);
        return `<div class="bar-group"><div class="bar-value">${item.value.toLocaleString("en-IN")}</div><div class="bar ${item.type}" style="height:${height}%" title="${item.label}: ${item.value}"></div><div class="x-label">${item.label}</div></div>`;
    }).join("");
}

/* =========================================================
   RESPONSIVE SIDEBAR
   ========================================================= */

function openSidebar(){
    $("sidebar").classList.add("open");
    $("overlay").classList.add("show");
}

function closeSidebar(){
    $("sidebar").classList.remove("open");
    $("overlay").classList.remove("show");
}

$("mobileMenu").addEventListener("click",openSidebar);
$("overlay").addEventListener("click",closeSidebar);

/* =========================================================
   ROUTING / NAVIGATION STRUCTURE
   Frontend-only for now.
   Replace route handling with your backend/router later.
   ========================================================= */

const routeNames = {
    dashboard:"Dashboard",
    users:"Users",
    applications:"GST Applications",
    pending:"Pending Applications",
    approved:"Approved Applications",
    rejected:"Rejected Applications",
    documents:"Document Verification",
    notifications:"Notifications",
    reports:"Reports",
    settings:"Settings",
    support:"Help & Support",
    statistics:"Application Statistics"
};

function navigate(route){
    if(!routeNames[route]) return;

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.toggle("active",item.dataset.route === route);
    });

    // Hide dashboard preview and all dedicated views first.
    const dashboardPreview = document.querySelector(".content > .welcome");
    const dashboardStats = document.querySelector(".content > .stats");
    const dashboardGrids = document.querySelectorAll(".content > .grid");
    const recentUsersView = $("recentUsersView");
    const applicationStatisticsView = $("applicationStatisticsView");

    if(dashboardPreview) dashboardPreview.style.display = route === "dashboard" ? "flex" : "none";
    if(dashboardStats) dashboardStats.style.display = route === "dashboard" ? "grid" : "none";
    dashboardGrids.forEach(grid => grid.style.display = route === "dashboard" ? "grid" : "none");
    recentUsersView.classList.toggle("active", route === "users");
    applicationStatisticsView.classList.toggle("active", route === "statistics");

    // Keep the dashboard's Users / Statistics buttons connected to their dedicated views.
    if(route === "users") renderUsersView();
    if(route === "statistics") renderStatisticsView();

    if(window.innerWidth <= 850) closeSidebar();

    if(route !== "dashboard" && route !== "users" && route !== "statistics"){
        showToast(routeNames[route], `${routeNames[route]} section is ready for backend/API integration.`);
    }
}

document.querySelectorAll("[data-route]").forEach(element => {
    element.addEventListener("click",() => navigate(element.dataset.route));
});

$("recentUsersPreview").addEventListener("click", (event) => {
    if(event.target.closest("button")) return;
    navigate("users");
});

$("applicationStatisticsPreview").addEventListener("click", (event) => {
    if(event.target.closest("button")) return;
    navigate("statistics");
});

$("userSearch").addEventListener("input", filterUsersView);
$("userStatusFilter").addEventListener("change", filterUsersView);
$("refreshStatsView").addEventListener("click", () => {
    renderStatisticsView();
    showToast("Statistics Refreshed", "Application statistics have been updated.");
});

/* =========================================================
   FILTER EVENTS
   ========================================================= */

$("applicationSearch").addEventListener("input",filterApplications);
$("applicationStatusFilter").addEventListener("change",filterApplications);

$("refreshChart").addEventListener("click",() => {
    renderChart();
    showToast("Statistics Refreshed","Application statistics have been updated.");
});

$("notificationBtn").addEventListener("click",() => {
    showToast("Notifications","You have 3 new admin notifications.");
});

$("logoutBtn").addEventListener("click",() => {
    const confirmed = confirm("Are you sure you want to logout?");

    if(confirmed){
        showToast("Logout","Connect this action to your login/session API.");
        /* Later:
           window.location.href = "login.html";
        */
    }
});

/* =========================================================
   OPTIONAL LOADING STATE
   Demonstrates how API loading can be integrated later.
   ========================================================= */

function simulateInitialLoad(){
    const applicationBody = $("applicationsBody");
    const userBody = $("usersBody");

    applicationBody.innerHTML = `
        <tr>
            <td colspan="6">
                <div class="loading-row">
                    <div class="spinner"></div>
                    Loading applications...
                </div>
            </td>
        </tr>
    `;

    userBody.innerHTML = `
        <tr>
            <td colspan="5">
                <div class="loading-row">
                    <div class="spinner"></div>
                    Loading users...
                </div>
            </td>
        </tr>
    `;

    setTimeout(() => {
        updateSummary();
        renderApplications(applications);
        renderUsers();
        renderChart();
        renderDate();
    },450);
}

/* =========================================================
   START APPLICATION
   ========================================================= */

simulateInitialLoad();
