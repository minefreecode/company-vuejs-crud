import Home from './routes/home/Index.vue'
import Crm from './routes/crm/Index.vue'
import crmRoutes from './routes/crm/router'
import Administration from './routes/administration/Index.vue'
import administrationRoutes from './routes/administration/router'
import Contribution from './routes/contribution/Index.vue'
import contributionRoutes from './routes/contribution/router'

let appRoutes = [
  {
    path: 'home',
    name: 'home',
    component: Home,
  },
  {
    path: 'crm',
    name: 'crm',
    component: Crm,
    children: crmRoutes,
    meta: { guard: 'CRM' },
  },
  {
    path: 'administration',
    name: 'administration',
    component: Administration,
    children: administrationRoutes,
    meta: { guard: 'ADMIN' },
  },
  {
    path: 'contribution',
    name: 'contribution',
    component: Contribution,
    children: contributionRoutes,
    meta: { guard: 'CONTRIB' },
  },
]

export default appRoutes
