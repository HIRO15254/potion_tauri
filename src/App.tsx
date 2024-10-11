import { MantineProvider } from "@mantine/core";
import {AppRoutes} from "./routes/AppRoutes";
import {CustomAppShell} from "./common/components/CustomAppShell/CustomAppShell";

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/nprogress/styles.css';

function App() {
  return (
    <MantineProvider>
      <CustomAppShell>
        <AppRoutes />
      </CustomAppShell>
    </MantineProvider>
  );
}

export default App;
