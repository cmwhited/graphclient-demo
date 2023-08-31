import { app } from './app.js';

app.listen({ port: 4000, host: '0.0.0.0' }, () => {
  console.log(`Admin API running on http://localhost:4000/admin` + '\n' + app.printRoutes({ commonPrefix: false }));
});
