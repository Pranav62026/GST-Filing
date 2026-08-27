import { nanoid } from "nanoid";

const USERS_KEY = "gst_users";
const CURRENT_USER_KEY = "gst_current_user";

export function getUsers() {
  const users = localStorage.getItem(USERS_KEY);

  if (!users) {
    return [];
  }

  return JSON.parse(users);
}

export function registerUser(userData) {
  const users = getUsers();

  const existingUser = users.find((user) => user.email === userData.email);

  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists.",
    };
  }

  const newUser = {
    id: nanoid(),
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
    onboardingStatus: "not_started",
  };

  users.push(newUser);

  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return {
    success: true,
    user: newUser,
  };
}

export function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  return {
    success: true,
    user,
  };
}

export function getCurrentUser() {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}



// onboarding staus 

export function updateOnboardingStatus(status) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "No logged-in user found.",
    };
  }

  const users = getUsers();

  const updatedUser = {
    ...currentUser,
    onboardingStatus: status,
  };

  const updatedUsers = users.map((user) =>
    user.id === currentUser.id ? updatedUser : user,
  );

  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));

  return {
    success: true,
    user: updatedUser,
  };
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}
