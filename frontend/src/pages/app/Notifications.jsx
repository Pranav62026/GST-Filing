import { Bell, CheckCircle2, Clock3, XCircle } from "lucide-react";

import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import notifications from "../../data/notifications";

const NOTIFICATION_ICONS = {
  pending: Clock3,
  success: CheckCircle2,
  error: XCircle,
};

const NOTIFICATION_VARIANTS = {
  pending: "warning",
  success: "success",
  error: "error",
};

function Notifications() {
  return (
    <div className="min-h-full bg-background">
      <main className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant bg-surface-container">
              <Bell className="h-5 w-5 text-on-surface" />
            </div>

            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
                Notifications
              </h1>

              <p className="mt-1 text-sm text-on-surface-variant">
                Important updates related to your applications.
              </p>
            </div>
          </div>
        </div>

        <Card padding={false} className="overflow-hidden">
          {notifications.length > 0 ? (
            notifications.map((notification) => {
              const Icon = NOTIFICATION_ICONS[notification.type] || Bell;

              return (
                <div
                  key={notification.id}
                  className="flex gap-4 border-b border-outline-variant px-5 py-5 last:border-b-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-surface-container">
                    <Icon className="h-5 w-5 text-on-surface" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="text-sm font-semibold text-on-surface">
                        {notification.title}
                      </h2>

                      <Badge
                        variant={
                          NOTIFICATION_VARIANTS[notification.type] ||
                          "secondary"
                        }
                      >
                        {notification.type}
                      </Badge>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                      {notification.message}
                    </p>

                    <p className="mt-2 text-xs text-on-surface-variant">
                      {notification.time}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="px-5 py-16 text-center">
              <Bell className="mx-auto h-8 w-8 text-on-surface-variant" />

              <p className="mt-3 text-sm font-medium text-on-surface">
                No notifications
              </p>

              <p className="mt-1 text-xs text-on-surface-variant">
                You're all caught up.
              </p>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}

export default Notifications;
