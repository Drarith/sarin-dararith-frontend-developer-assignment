# E-commerce Product Management Assignment

## Implemented Features

### Product Management
-   **View Products:** Data table displaying product details (Image, Name, Price, Category, Status).
-   **Add Product:** Dedicated form with client-side validation for creating new inventory items.
-   **Edit Product:** Update existing product details via dynamic routing `[id]`.
-   **Delete Product:** Secure deletion workflow with confirmation dialogs.

### User Interface & Experience
-   **Responsive Sidebar:** Collapsible navigation that adapts to mobile and desktop viewports.
-   **Interactive Data Table:**
    -   **Selection:** Checkbox support for selecting single or multiple rows.
    -   **Pagination:** Pagination controls for handling large datasets.
-   **Feedback & States:**
    -   **Loading Skeletons:** Visual placeholders while data is fetching.
    -   **Notifications:** Dropdown menu for system alerts.
    -   **Dialogs:** Modal interactions for critical actions.

### Technical Implementation
-   **Form Management:** Form handling using **React Hook Form**.
-   **Validation:** Schema validation using **Zod**.
-   **State Management:** Server state management and caching with **TanStack Query (React Query)**.
-   **Styling:** Utility-first styling with **Tailwind CSS** and **Shadcn UI** components.

## Tech Stack

-   **Framework:** Next.js 16.1.2
-   **Library:** React 19.2.3
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Library:** Shadcn UI
-   **Icons:** Lucide React
-   **Data Fetching:** TanStack Query
-   **Validation:** Zod

## Project Structure

```text
Project Structure

ecommerce-management
├── app                                         # Next.js App Router root directory
│   ├── products-management                     # Feature: Product Management routes
│   │   ├── add                                 # Route: Add new product
│   │   ├── edit                                # Route: Edit existing product
│   │   │   └── [id]                            # Dynamic Route: Product ID
│   │   │       ├── EditProductClient.tsx       # Component: Client-side logic for editing
│   │   └── page.tsx                            # Page: Product Management Dashboard/List
│   ├── globals.css                             # Global Tailwind CSS styles
│   ├── layout.tsx                              # Root Application Layout
│   └── page.tsx                                # Page: Main Dashboard Home
├── components                                  # Reusable UI and Functional Components
│   ├── pagination                              # Feature: Pagination
│   ├── productActions                          # Feature: Row Actions
│   ├── productManagement                       # Domain: Product Management specific components
│   │   ├── Form                                # Sub-feature: Product Forms
│   │   ├── header                              # Sub-feature: Section Headers
│   │   └── productTab                          # Sub-feature: Product Data Display
│   ├── sidebar                                 # Feature: Navigation Sidebar
│   ├── skeletons                               # Feature: Loading States
│   └── ui                                      # Library: Shadcn UI
├── config                                      # App Configuration
├── hooks                                       # Custom React Hooks
├── lib                                         # Utilities
├── providers                                   # Context Providers
├── public                                      # Static Assets
├── tests                                       # Tests
├── types                                       # TypeScript Definitions
├── validation                                  # Form Validation

```

## Getting Started

### Prerequisites

-   **Node.js:** v22.14.0
-   **Package Manager:** npm

### Installation

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Drarith/sarin-dararith-frontend-developer-assignment.git](https://github.com/Drarith/sarin-dararith-frontend-developer-assignment.git)
    cd ecommerce-management
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.


## Usage Guide

### Product Management
1.  **Navigate to Products:** Click the "Product Management" link in the sidebar to access the main inventory table.
2.  **Add a Product:**
    -   Click the **"Add Product"** button in the top right corner.
    -   Fill out the form.
    -   *Note: Client-side validation (Zod) will prevent submission if fields are missing or invalid.*
3.  **Edit a Product:**
    -   Locate the product in the table.
    -   Click the **Edit icon (pencil)** menu on the right side of the row.
    -   Select **"Save Changes"** to modify product details.
4.  **Delete a Product:**
    -   Click the **Delete icon (trash can)** menu on a product row.
    -   Confirm the action in the pop-up dialog.
