# 🎬 MovieScope

MovieScope is a responsive, API-driven movie discovery and watchlist application designed to make exploring movies simple and organized.

The application integrates with the TMDB API to retrieve current movie information and provides a modular front-end architecture for discovering trending titles, viewing movie information, searching and filtering results, and managing a personal watchlist.

MovieScope was designed around reusable JavaScript modules, reusable UI components, responsive layouts, external API integration, browser storage, and a production build/deployment workflow.

---

## ✨ Features

MovieScope is being developed with the following functionality:

- Browse trending movies
- Search for movies
- Filter movie results
- View movie posters and ratings
- View release information
- Open detailed information for an individual movie
- Display cast information
- Access movie trailers
- Display related movie recommendations
- Add movies to a personal watchlist
- Remove movies from the watchlist
- Persist watchlist information using localStorage
- Responsive mobile, tablet, and desktop layouts
- Reusable header and footer partials
- Reusable movie-card components
- Loading and API error handling

> Some features may still be under active development.

---

## 🛠 Technologies

MovieScope uses:

- HTML5
- CSS3
- JavaScript
- ES Modules
- Vite
- npm
- TMDB API
- localStorage
- ESLint
- Prettier
- Git
- GitHub
- Render

---

## 🧱 Application Architecture

MovieScope separates responsibilities across JavaScript modules rather than placing all application logic into a single JavaScript file.

For example:

- `api.mjs` handles communication with TMDB.
- `movie-list.mjs` converts movie data into reusable movie-card components.
- `search.mjs` manages movie searches.
- `filters.mjs` manages filtering and sorting behavior.
- `movie-details.mjs` manages the individual movie view.
- `watchlist.mjs` manages watchlist behavior.
- `storage.mjs` centralizes browser-storage operations.
- `utils.mjs` contains shared UI and utility functionality.

This structure keeps API communication, rendering, storage, and page-specific behavior separated and easier to maintain.

---

## 📁 Project Structure

```text
MovieScope/
│
├── src/
│   ├── index.html
│   ├── movie-details.html
│   ├── watchlist.html
│   │
│   ├── css/
│   │   ├── styles.css
│   │   ├── movie-cards.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── main.mjs
│   │   ├── api.mjs
│   │   ├── movie-list.mjs
│   │   ├── movie-details.mjs
│   │   ├── search.mjs
│   │   ├── filters.mjs
│   │   ├── watchlist.mjs
│   │   ├── storage.mjs
│   │   └── utils.mjs
│   │
│   ├── partials/
│   │   ├── header.html
│   │   └── footer.html
│   │
│   └── public/
│       └── images/
│
├── .env.example
├── .editorconfig
├── .gitignore
├── .prettierrc
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── LICENSE
```

The exact structure may change as MovieScope continues to develop.

---

## 🎞 TMDB Integration

MovieScope uses the TMDB API as its external movie-data source.

The API provides information used throughout the application, including:

- Trending movies
- Movie IDs
- Titles
- Posters
- Release dates
- Ratings
- Genres
- Movie descriptions
- Cast information
- Videos and trailers
- Recommendations

API communication is centralized in:

```text
src/js/api.mjs
```

This prevents API-request logic from being duplicated throughout the application.

---

## 🔐 Environment Variables

MovieScope does not intentionally store the developer's TMDB credential in the Git repository.

The local credential is supplied through an environment variable:

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

Do not commit your real `.env` file.

A `.env.example` file is included to document the required configuration without exposing credentials.

---

## 🚀 Getting Started

### Prerequisites

Install:

- Node.js
- npm
- Git

You will also need a TMDB account and your own TMDB API credentials.

---

### 1. Clone the repository

```bash
git clone https://github.com/MichealOnyemelonu/MovieScope.git
```

Enter the project:

```bash
cd MovieScope
```

---

### 2. Install dependencies

```bash
npm install
```

This installs the dependencies defined in `package.json`.

---

### 3. Configure TMDB

Create the environment file required by the current project configuration.

If the project uses:

```text
src/.env
```

create that file and add:

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

Replace the placeholder with your own TMDB API Read Access Token.

Never commit the real token.

---

### 4. Start MovieScope

```bash
npm run start
```

Vite will display the local development URL in the terminal.

For example:

```text
http://localhost:5173/
```

The actual port may differ if that port is already in use.

---

## 📦 Available npm Commands

### Development

```bash
npm run start
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates the optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the generated production build locally for testing.

### Lint

```bash
npm run lint
```

Checks JavaScript files for linting problems.

### Format

```bash
npm run format
```

Formats supported project files using Prettier.

---

## 🏗 Production Build

MovieScope uses Vite for development and production builds.

Create a production build with:

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

The generated `dist` directory should be treated as build output rather than the source of truth for the application.

---

## ☁️ Deployment

MovieScope can be deployed as a static Vite application.

The current deployment process uses Render.

A typical Render configuration requires:

### Build Command

```bash
npm run build
```

### Publish Directory

```text
dist
```

### Environment Variable

```text
VITE_TMDB_TOKEN
```

The value should be configured securely through the hosting provider rather than committed to GitHub.

After changing Vite environment variables in a deployment environment, rebuild the application so Vite receives the new values.

---

## 📱 Responsive Design

MovieScope is designed for:

- Mobile devices
- Tablets
- Desktop displays

Responsive behavior is primarily maintained in:

```text
src/css/responsive.css
```

The navigation changes to a hamburger-style menu on smaller displays, while movie grids adjust their column layout according to the available screen width.

The interface can be tested using the responsive device tools available in modern browser developer tools.

---

## 🧩 Shared Partials

MovieScope uses reusable HTML partials for elements that are shared between pages:

```text
src/partials/header.html
src/partials/footer.html
```

JavaScript loads these components into the appropriate page containers.

This avoids maintaining separate copies of the same navigation and footer markup across multiple HTML pages.

---

## 🎬 Reusable Movie Cards

Movie results are not manually written into the HTML.

TMDB returns movie objects through the API, and MovieScope converts those objects into reusable movie-card components.

The movie-list module is responsible for this rendering:

```text
src/js/movie-list.mjs
```

A movie card can contain information such as:

- Poster
- Movie title
- Release year
- Rating
- View Details action
- Watchlist action

This allows the same card structure to be reused for multiple movie collections.

---

## 💾 Watchlist and Local Storage

The planned watchlist architecture separates UI behavior from browser persistence.

`watchlist.mjs` is responsible for watchlist functionality while `storage.mjs` provides shared localStorage operations.

This separation allows multiple parts of the application to interact with persisted data without duplicating storage code.

---

## ♿ Accessibility

MovieScope aims to include:

- Semantic HTML
- Descriptive page headings
- Accessible navigation
- Keyboard-accessible controls
- Alternative text where images convey information
- Visible focus indicators
- Responsive tap targets
- `aria-expanded` behavior for the mobile menu
- Clear loading and error messages

Accessibility will continue to be reviewed as functionality is added.

---

## ⚠️ Troubleshooting

### TMDB returns `401 Unauthorized`

Check that:

1. The environment variable exists.
2. The environment variable name matches:

```text
VITE_TMDB_TOKEN
```

3. The value is the expected TMDB API Read Access Token.
4. The Vite development server was restarted after changing `.env`.
5. The production environment variable has also been configured on the hosting platform.

---

### An image returns `404`

Verify that the image exists in the expected public/static asset directory and that the production build contains the asset.

Do not manually modify `dist` as a permanent fix. Correct the source asset configuration and rebuild the project.

---

### Environment variable works locally but not after deployment

Local `.env` files should not be committed.

Configure:

```text
VITE_TMDB_TOKEN
```

through the hosting platform and trigger a new production build.

---

## 🗺 Roadmap

Planned or ongoing work includes:

- Complete movie search
- Genre filtering
- Sorting
- Full movie-details view
- Cast information
- Trailer integration
- Movie recommendations
- Persistent watchlist
- Improved empty states
- Improved loading states
- Improved API error handling
- Accessibility testing
- Production optimization

---

## 🙏 TMDB Attribution

MovieScope uses the TMDB API and TMDB content.

> This product uses the TMDB API but is not endorsed or certified by TMDB.

MovieScope should use an approved TMDB logo in its About/Credits area in accordance with TMDB's attribution requirements.

MovieScope and its source code are independently developed and are not owned, endorsed, or certified by TMDB.

---

## 🤝 Contributing

If you would like to experiment with MovieScope:

1. Fork the repository.
2. Create a branch.
3. Make your changes.
4. Test the application locally.
5. Submit a pull request if you would like the changes considered for this repository.

Example:

```bash
git checkout -b feature/movie-search
```

---

## 📄 License

MovieScope source code is available under the MIT License.

See the `LICENSE` file for details.

The MIT License applies to the MovieScope source code authored for this project. TMDB data, images, API services, logos, and other third-party materials remain subject to their respective terms and licenses.

---

## 👤 Author

**Micheal Onyemelonu**

GitHub: https://github.com/MichealOnyemelonu

---

## Project Status

🚧 **MovieScope is actively under development.**

The repository documents the application's development as individual features are designed, implemented, tested, and deployed.