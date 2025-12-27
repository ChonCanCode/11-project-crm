# 11-project-crm

## Goal

- Build a basic CRM system for property management.

---

## Library installed

- npm install react-router-dom
- npm install -D tailwindcss@3
- npm install @mui/material @emotion/react @emotion/styled
-

---

### 20251223

- Build a home page with header menu bar on the left and a list of property showing at the front.
- Naming conventions
  - PascalCase
    - React components
    - Custom hooks that return JSX
    - Pages/ screens (in routing setups)
  - camelCase
    - Utility/ helper functions
    - Constants
    - Services (API calls)
    - Configuration files
    - Styles

### 20251224

- Used `https://react-leaflet.js.org/` to build an interactive map, however, it is hard to modifie therefore such approah abandened.
- Fixed `NavBar.jsx` style, realised `style.css` override padding and margin.

### 20251225

- Continue working on property listing function.
- Added `https://www.w3schools.com/react/react_router.asp`

  - `Routes` should live where the page content changes
  - `NavBar` is a shared UI componen, not page content, therefore they shouldn't be placed in the same file.

  ```
  main.jsx
  └── BrowserRouter
    └── App.jsx
         ├── NavBar
         └── Routes

  ```

- Big discover on `https://mui.com/material-ui/`.
- `Material UI` an open-source React component library. Contain all the template that I need to build a CRM.

---

### 20251227

- Added the library in README in case such file is opening in a new device.
- Removing the table from MUI library
- Learning to build a table from scratch
