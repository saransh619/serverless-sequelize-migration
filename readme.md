# My Serverless Sequelize Project

This demo project showcases the functionality of Serverless Sequelize Migrations, designed to support multiple databases for both core and tenant environments.

## Table of Contents

- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Database Migration and Seeding](#database-migration-and-seeding)
- [Deployment](#deployment)
- [Usage](#usage)
- [Docker](#docker)
- [Dependencies](#dependencies)

## Project Structure

The project is organized into the following main directories:

- **src/config**: Contains database configuration files.
  - `coreDatabase.js`: Configuration for the core database.
  - `tenantDatabase.js`: Configuration for the tenant database.
- **src/core**: Core functionalities.
  - `handlers`: Core handlers.
  - `migrations`: Migrations for the core database.
  - `seeders`: Seeders for the core database.
- **src/tenant**: Tenant-specific functionalities.
  - `handlers`: Tenant handlers.
  - `migrations`: Migrations for the tenant database.
  - `seeders`: Seeders for the tenant database.
- **src/models**: Models for Comments, Post, Reply, User.
- **.env**: Environment variables configuration. See [.env.example](.env.example) for an example.
- **serverless-core.yml**: Serverless configuration for core deployment.
- **serverless-tenant.yml**: Serverless configuration for tenant deployment.
- **serverless.yml**: Common Serverless configuration.
- **package.json**: Node.js project configuration.
- **README.md**: Project documentation.

## Configuration

Database configuration is handled in the `src/config` directory. Environment-specific configurations are stored in the `.env` file.

## Scripts

The project provides several npm scripts for common tasks:

- **Deployment Scripts**:
  - `deploy-core`: Deploy the core application.
  - `deploy-tenant`: Deploy the tenant application.
  - `remove-core`: Remove the deployed core application.
  - `remove-tenant`: Remove the deployed tenant application.
- **Local Development Scripts**:
  - `start-core`: Start the core application locally.
  - `start-tenant`: Start the tenant application locally.
- **Database Migration Scripts**:
  - `migrate-up-core`: Run core database migrations up.
  - `migrate-up-tenant`: Run tenant database migrations up.
  - `migrate-down-core`: Run core database migrations down.
  - `migrate-down-tenant`: Run tenant database migrations down.
  - `migrate-reset-core`: Reset core database migrations.
  - `migrate-reset-tenant`: Reset tenant database migrations.
  - `migrate-list-core`: List core database migrations.
  - `migrate-list-tenant`: List tenant database migrations.
- **Database Seeding Scripts**:
  - `seed-core`: Seed data for the core database using Sequelize migrations.
  - `undo-seed-core`: Undo seeding for the core database using Sequelize migrations.
  - `seed-tenant`: Seed data for the tenant database using Sequelize migrations.
  - `undo-seed-tenant`: Undo seeding for the tenant database using Sequelize migrations.

## Database Migration and Seeding

The project leverages the following Serverless plugins for database migration:

- **serverless-sequelize-migrations**: Adds support for Sequelize database migrations.
- **serverless-plugin-scripts**: Enables custom scripts within the Serverless framework.

Use the migration scripts to manage your database schema, and Sequelize migrations for seeding initial data.

## Deployment

The project is set up for deployment using the Serverless framework. Use the provided deployment scripts to deploy or remove the core and tenant applications.

## Usage

1. Clone the repository: `git clone https://github.com/saransh619/serverless-sequelize-migration.git`
2. Navigate to the project directory: `cd serverless-sequelize-migration`
3. Install dependencies: `npm install`
4. Copy `.env.example` to create your `.env` file: `cp .env.example .env`
5. Configure environment variables in the `.env` file based on your database setup.
6. Run desired scripts using `npm run <script-name>`.

## Docker

This project is Dockerized for easy containerization and deployment. The Docker image is available on [Docker Hub](https://hub.docker.com/r/saranshpachhai/my-serverless-app).

To pull the Docker image, use the following command:

```bash
docker pull saranshpachhai/my-serverless-app:latest
```
To run the application in a Docker container, use:

```bash
docker run -p 3000:3000 saranshpachhai/my-serverless-app:latest
```
## Dependencies

- Express: Web framework for Node.js.
- Sequelize: Promise-based Node.js ORM.
- Serverless: Framework for building and deploying serverless applications.
- Other dependencies listed in `package.json`.

Feel free to explore the project, modify configurations, and extend functionalities as needed.

## Contributing

We welcome contributions! Please follow our contribution guidelines.

## License

This Docker image is licensed under the MIT License.

## Maintainer

Maintained by Saransh Pachhai.