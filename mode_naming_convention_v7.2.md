# Mode Naming Convention Mapping (v7.1 to v7.2)

This document maps the modes from the v7.1 structure to the new v7.2 naming convention (`prefix-topic`) and directory structure (`.modes/prefix-topic/prefix-topic.mode.md`).

| v7.1 Path                                                              | v7.1 Slug                  | v7.1 Emoji | v7.2 Prefix | v7.2 Topic         | v7.2 New Slug              | v7.2 New Emoji |
| :--------------------------------------------------------------------- | :------------------------- | :--------- | :---------- | :----------------- | :------------------------- | :------------- |
| `v7.1/modes/assistant/context/session-summarizer/session-summarizer.mode.md` | `session-summarizer`       | ⏱️         | `agent-`    | `session-summarizer` | `agent-session-summarizer` | ⏱️             |
| `v7.1/modes/assistant/context/research-context-builder/research-context-builder.mode.md` | `research-context-builder` | 🌐         | `agent-`    | `research`         | `agent-research`           | 🌐             |
| `v7.1/modes/assistant/context/discovery-agent/discovery-agent.mode.md` | `discovery-agent`          | 🔍         | `agent-`    | `context-discovery`| `agent-context-discovery`  | 🕵️             |
| `v7.1/modes/assistant/utility/context-condenser/context-condenser.mode.md` | `context-condenser`        | 🧠         | `agent-`    | `context-condenser`| `agent-context-condenser`  | 🗜️             |
| `v7.1/modes/assistant/utility/context-resolver/context-resolver.mode.md` | `context-resolver`         | 📖         | `agent-`    | `context-resolver` | `agent-context-resolver`   | 📖             |
| `v7.1/modes/assistant/utility/file-repair-specialist/file-repair-specialist.mode.md` | `file-repair-specialist`   | 🔧         | `agent-`    | `file-repair`      | `agent-file-repair`        | 🩹             |
| `v7.1/modes/assistant/utility/crawl4ai-specialist/crawl4ai-specialist.mode.md` | `crawl4ai-specialist`      | 🕷️         | `spec-`     | `crawl4ai`         | `spec-crawl4ai`            | 🕷️             |
| `v7.1/modes/assistant/web-scraping/firecrawl-specialist/firecrawl-specialist.mode.md` | `firecrawl-specialist`     | 🔥         | `spec-`     | `firecrawl`        | `spec-firecrawl`           | 🚒             |
| `v7.1/modes/director/product/product-manager/product-manager.mode.md` | `product-manager`          | 🗺️         | `manager-`  | `product`          | `manager-product`          | 📦             |
| `v7.1/modes/director/project/project-manager/project-manager.mode.md` | `project-manager`          | 📋         | `manager-`  | `project`          | `manager-project`          | 📋             |
| `v7.1/modes/director/project/project-onboarding/project-onboarding.mode.md` | `project-onboarding`       | 🚦         | `manager-`  | `onboarding`       | `manager-onboarding`       | 🚦             |
| `v7.1/modes/director/technical/technical-architect/technical-architect.mode.md` | `technical-architect`      | 🏗️         | `core-`     | `architect`        | `core-architect`           | 🏗️             |
| `v7.1/modes/executive/roo-commander/roo-commander.mode.md`          | `roo-commander`            | 👑         | `core-`     | `commander`        | `core-commander`           | 👑             |
| `v7.1/modes/lead/backend/backend-lead/backend-lead.mode.md`         | `backend-lead`             | ⚙️         | `lead-`     | `backend`          | `lead-backend`             | ⚙️             |
| `v7.1/modes/lead/database/database-lead/database-lead.mode.md`      | `database-lead`            | 💾         | `lead-`     | `db`               | `lead-db`                  | 🗄️             |
| `v7.1/modes/lead/design/design-lead/design-lead.mode.md`            | `design-lead`              | 🎨         | `lead-`     | `design`           | `lead-design`              | 🎨             |
| `v7.1/modes/lead/devops/devops-lead/devops-lead.mode.md`            | `devops-lead`              | 🚀         | `lead-`     | `devops`           | `lead-devops`              | 🚀             |
| `v7.1/modes/lead/devops/aws/aws-architect/aws-architect.mode.md`    | `aws-architect`            | ☁️         | `cloud-`    | `aws`              | `cloud-aws`                | ☁️             |
| `v7.1/modes/lead/devops/azure/azure-architect/azure-architect.mode.md` | `azure-architect`          | ☁️         | `cloud-`    | `azure`            | `cloud-azure`              | 🌐             |
| `v7.1/modes/lead/devops/gcp/gcp-architect/gcp-architect.mode.md`    | `gcp-architect`            | ☁️         | `cloud-`    | `gcp`              | `cloud-gcp`                | 🌎             |
| `v7.1/modes/lead/frontend/frontend-lead/frontend-lead.mode.md`      | `frontend-lead`            | 🖥️         | `lead-`     | `frontend`         | `lead-frontend`            | 🖥️             |
| `v7.1/modes/lead/qa/qa-lead/qa-lead.mode.md`                        | `qa-lead`                  | 🧪         | `lead-`     | `qa`               | `lead-qa`                  | 💎             |
| `v7.1/modes/lead/security/security-lead/security-lead.mode.md`      | `security-lead`            | 🛡️         | `lead-`     | `security`         | `lead-security`            | 🛡️             |
| `v7.1/modes/worker/ai-ml/huggingface-specialist/huggingface-specialist.mode.md` | `huggingface-specialist`   | 🤗         | `spec-`     | `huggingface`      | `spec-huggingface`         | 🤗             |
| `v7.1/modes/worker/ai-ml/openai-specialist/openai-specialist.mode.md` | `openai-specialist`        | 🧠         | `spec-`     | `openai`           | `spec-openai`              | 🎱             |
| `v7.1/modes/worker/auth/supabase-auth-specialist/supabase-auth-specialist.mode.md` | `supabase-auth-specialist` | 🔑         | `auth-`     | `supabase`         | `auth-supabase`            | 🔐             |
| `v7.1/modes/worker/auth/firebase-auth-specialist/firebase-auth-specialist.mode.md` | `firebase-auth-specialist` | 🔥         | `auth-`     | `firebase`         | `auth-firebase`            | 🧯             |
| `v7.1/modes/worker/backend/directus-specialist/directus-specialist.mode.md` | `directus-specialist`      | 🎯         | `spec-`     | `directus`         | `spec-directus`            | 🎯             |
| `v7.1/modes/worker/backend/django-developer/django-developer.mode.md` | `django-developer`         | 🐍         | `framework-`| `django`           | `framework-django`         | 🐍             |
| `v7.1/modes/worker/backend/php-laravel-developer/php-laravel-developer.mode.md` | `php-laravel-developer`    | 🐘         | `framework-`| `laravel`          | `framework-laravel`        | 🔩             |
| `v7.1/modes/worker/backend/api-developer/api-developer.mode.md`     | `api-developer`            | 🔌         | `dev-`      | `api`              | `dev-api`                  | 🔌             |
| `v7.1/modes/worker/backend/wordpress-specialist/wordpress-specialist.mode.md` | `wordpress-specialist`     | 🔌         | `framework-`| `wordpress`        | `framework-wordpress`      | 🇼             |
| `v7.1/modes/worker/backend/firebase-developer/firebase-developer.mode.md` | `firebase-developer`       | 🔥         | `cloud-`    | `firebase`         | `cloud-firebase`           | 🔥             |
| `v7.1/modes/worker/backend/flask-developer/flask-developer.mode.md` | `flask-developer`          | 🧪         | `framework-`| `flask`            | `framework-flask`          | 🧪             |
| `v7.1/modes/worker/backend/supabase-developer/supabase-developer.mode.md` | `supabase-developer`       | 🧱         | `cloud-`    | `supabase`         | `cloud-supabase`           | 🦸             |
| `v7.1/modes/worker/backend/fastapi-developer/fastapi-developer.mode.md` | `fastapi-developer`        | 🚀         | `framework-`| `fastapi`          | `framework-fastapi`        | 💨             |
| `v7.1/modes/worker/backend/frappe-specialist/frappe-specialist.mode.md` | `frappe-specialist`        | 🛠️         | `framework-`| `frappe`           | `framework-frappe`         | 🧋             |
| `v7.1/modes/worker/cross-functional/refactor-specialist/refactor-specialist.mode.md` | `refactor-specialist`      | ♻️         | `util-`     | `refactor`         | `util-refactor`            | 🧹             |
| `v7.1/modes/worker/cross-functional/performance-optimizer/performance-optimizer.mode.md` | `performance-optimizer`    | ⚡         | `util-`     | `performance`      | `util-performance`         | 🏎️             |
| `v7.1/modes/worker/cross-functional/technical-writer/technical-writer.mode.md` | `technical-writer`         | ✍️         | `util-`     | `writer`           | `util-writer`              | ✍️             |
| `v7.1/modes/worker/cross-functional/junior-developer/junior-developer.mode.md` | `junior-developer`         | 🌱         | `util-`     | `junior-dev`       | `util-junior-dev`          | 🌱             |
| `v7.1/modes/worker/cross-functional/bug-fixer/bug-fixer.mode.md`    | `bug-fixer`                | 🐛         | `util-`     | `bug-fixer`        | `util-bug-fixer`           | 🩺             |
| `v7.1/modes/worker/cross-functional/code-reviewer/code-reviewer.mode.md` | `code-reviewer`            | 👀         | `util-`     | `reviewer`         | `util-reviewer`            | 👀             |
| `v7.1/modes/worker/cross-functional/eslint-specialist/eslint-specialist.mode.md` | `eslint-specialist`        | 🔍         | `util-`     | `eslint`           | `util-eslint`              | 📏             |
| `v7.1/modes/worker/cross-functional/git-manager/git-manager.mode.md` | `git-manager`              | 🔧         | `util-`     | `git`              | `util-git`                 | 🦕             |
| `v7.1/modes/worker/cross-functional/mode-maintainer/mode-maintainer.mode.md` | `mode-maintainer`          | 🔧         | `util-`     | `mode-maintainer`  | `util-mode-maintainer`     | 🔧             |
| `v7.1/modes/worker/cross-functional/second-opinion/second-opinion.mode.md` | `second-opinion`           | 🤔         | `util-`     | `second-opinion`   | `util-second-opinion`      | 🤔             |
| `v7.1/modes/worker/cross-functional/senior-developer/senior-developer.mode.md` | `senior-developer`         | 🧑‍💻         | `util-`     | `senior-dev`       | `util-senior-dev`          | 🧑‍💻             |
| `v7.1/modes/worker/cross-functional/complex-problem-solver/complex-problem-solver.mode.md` | `complex-problem-solver`   | 🧩         | `util-`     | `complex-problem`  | `util-complex-problem`     | 🧩             |
| `v7.1/modes/worker/data-vis/d3js-specialist/d3js-specialist.mode.md` | `d3js-specialist`          | 📊         | `design-`   | `d3`               | `design-d3`                | 📊             |
| `v7.1/modes/worker/database/mongodb-specialist/mongodb-specialist.mode.md` | `mongodb-specialist`       | 🍃         | `data-`     | `mongo`            | `data-mongo`               | 🍃             |
| `v7.1/modes/worker/database/neon-db-specialist/neon-db-specialist.mode.md` | `neon-db-specialist`       | 🐘         | `data-`     | `neon`             | `data-neon`                | 🪀             |
| `v7.1/modes/worker/database/mysql-specialist/mysql-specialist.mode.md` | `mysql-specialist`         | 🐬         | `data-`     | `mysql`            | `data-mysql`               | 🐬             |
| `v7.1/modes/worker/database/database-specialist/database-specialist.mode.md` | `database-specialist`      | 💾         | `data-`     | `specialist`       | `data-specialist`          | 🗃️             |
| `v7.1/modes/worker/database/dbt-specialist/dbt-specialist.mode.md`  | `dbt-specialist`           | 🔄         | `data-`     | `dbt`              | `data-dbt`                 | 🔄             |
| `v7.1/modes/worker/database/elasticsearch-specialist/elasticsearch-specialist.mode.md` | `elasticsearch-specialist` | 🔍         | `data-`     | `elasticsearch`    | `data-elasticsearch`       | 🔍             |
| `v7.1/modes/worker/design/one-shot-web-designer/one-shot-web-designer.mode.md` | `one-shot-web-designer`    | ✨         | `design-`   | `one-shot`         | `design-one-shot`          | 🪄             |
| `v7.1/modes/worker/design/ui-designer/ui-designer.mode.md`          | `ui-designer`              | 🎨         | `design-`   | `ui`               | `design-ui`                | 🎨             |
| `v7.1/modes/worker/design/diagramer/diagramer.mode.md`              | `diagramer`                | 📊         | `design-`   | `diagramer`        | `design-diagramer`         | 📈             |
| `v7.1/modes/worker/devops/cloudflare-workers-specialist/cloudflare-workers-specialist.mode.md` | `cloudflare-workers-specialist` | ⚡         | `edge-`     | `workers`          | `edge-workers`             | 🧑‍🏭             |
| `v7.1/modes/worker/devops/infrastructure-specialist/infrastructure-specialist.mode.md` | `infrastructure-specialist`| 🏗️         | `infra-`    | `specialist`       | `infra-specialist`         | 🏢             |
| `v7.1/modes/worker/devops/docker-compose-specialist/docker-compose-specialist.mode.md` | `docker-compose-specialist`| 🐳         | `infra-`    | `compose`          | `infra-compose`            | 🐳             |
| `v7.1/modes/worker/frontend/accessibility-specialist/accessibility-specialist.mode.md` | `accessibility-specialist` | ♿         | `util-`     | `accessibility`    | `util-accessibility`       | ♿             |
| `v7.1/modes/worker/frontend/react-specialist/react-specialist.mode.md` | `react-specialist`         | ⚛️         | `dev-`      | `react`            | `dev-react`                | ⚛️             |
| `v7.1/modes/worker/frontend/vite-specialist/vite-specialist.mode.md` | `vite-specialist`          | ⚡         | `util-`     | `vite`             | `util-vite`                | 🎒             |
| `v7.1/modes/worker/frontend/material-ui-specialist/material-ui-specialist.mode.md` | `material-ui-specialist`   | 🎨         | `design-`   | `mui`              | `design-mui`               | 🎨             |
| `v7.1/modes/worker/frontend/jquery-specialist/jquery-specialist.mode.md` | `jquery-specialist`        | 🎯         | `util-`     | `jquery`           | `util-jquery`              | 🎯             |
| `v7.1/modes/worker/frontend/vuejs-developer/vuejs-developer.mode.md` | `vuejs-developer`          | 💚         | `framework-`| `vue`              | `framework-vue`            | 💚             |
| `v7.1/modes/worker/frontend/tailwind-specialist/tailwind-specialist.mode.md` | `tailwind-specialist`      | 💨         | `design-`   | `tailwind`         | `design-tailwind`          | 💨             |
| `v7.1/modes/worker/frontend/remix-developer/remix-developer.mode.md` | `remix-developer`          | 💿         | `framework-`| `remix`            | `framework-remix`          | 💿             |
| `v7.1/modes/worker/frontend/clerk-auth-specialist/clerk-auth-specialist.mode.md` | `clerk-auth-specialist`    | 🔑         | `auth-`     | `clerk`            | `auth-clerk`               | 🔑             |
| `v7.1/modes/worker/frontend/sveltekit-developer/sveltekit-developer.mode.md` | `sveltekit-developer`      | 🔥         | `framework-`| `sveltekit`        | `framework-sveltekit`      | 🏍️             |
| `v7.1/modes/worker/frontend/typescript-specialist/typescript-specialist.mode.md` | `typescript-specialist`    | 🔷         | `util-`     | `typescript`       | `util-typescript`          | 🔷             |
| `v7.1/modes/worker/frontend/frontend-developer/frontend-developer.mode.md` | `frontend-developer`       | 🖥️         | `dev-`      | `general`          | `dev-general`              | 🖥️             |
| `v7.1/modes/worker/frontend/threejs-specialist/threejs-specialist.mode.md` | `threejs-specialist`       | 🧊         | `design-`   | `threejs`          | `design-threejs`           | 🧊             |
| `v7.1/modes/worker/frontend/astro-developer/astro-developer.mode.md` | `astro-developer`          | 🧑‍🚀         | `framework-`| `astro`            | `framework-astro`          | 🧑‍🚀             |
| `v7.1/modes/worker/frontend/shadcn-ui-specialist/shadcn-ui-specialist.mode.md` | `shadcn-ui-specialist`     | 🧩         | `design-`   | `shadcn`           | `design-shadcn`            | 🧩             |
| `v7.1/modes/worker/frontend/nextjs-developer/nextjs-developer.mode.md` | `nextjs-developer`         | 🚀         | `framework-`| `nextjs`           | `framework-nextjs`         | ▲              |
| `v7.1/modes/worker/frontend/bootstrap-specialist/bootstrap-specialist.mode.md` | `bootstrap-specialist`     | 🅱️         | `design-`   | `bootstrap`        | `design-bootstrap`         | 🅱️             |
| `v7.1/modes/worker/frontend/angular/angular-developer/angular-developer.mode.md` | `angular-developer`        | 🅰️         | `framework-`| `angular`          | `framework-angular`        | 🅰️             |
| `v7.1/modes/worker/frontend/animation/animejs-specialist/animejs-specialist.mode.md` | `animejs-specialist`       | ✨         | `design-`   | `animejs`          | `design-animejs`           | 🪅             |
| `v7.1/modes/worker/frontend/ui-library/ant-design-specialist/ant-design-specialist.mode.md` | `ant-design-specialist`    | 🐜         | `design-`   | `antd`             | `design-antd`              | 🐜             |
| `v7.1/modes/worker/qa/e2e-tester/e2e-tester.mode.md`                | `e2e-tester`               | 🎭         | `test-`     | `e2e`              | `test-e2e`                 | 🎭             |
| `v7.1/modes/worker/qa/integration-tester/integration-tester.mode.md` | `integration-tester`       | 🔗         | `test-`     | `integration`      | `test-integration`         | 🔗             |