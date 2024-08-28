import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as Sentry from "@sentry/vue";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "http://63353bd4e2e37f511e5ead74c9a8b5cf@localhost:9000/2",
  integrations: [Sentry.browserProfilingIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost"],
  profilesSampleRate: 1.0,
});

app.mount("#app");
