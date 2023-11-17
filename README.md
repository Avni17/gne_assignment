## User Management Dashboard

### Introduction

•This web application is designed to provide a user management dashboard with a seamless and efficient user experience. It features two primary tabs: User Details and Account Creation.

[Live Demo](https://gne-assignment.vercel.app/)

## Project Info

This project uses NextJs and the contents are bundled using webpack.
### Technologies Used
• Next.js (React Framework)

• Tailwind CSS 

• PDF-LIB (To Print Generated Report)

### Features
#### User Details Tab
• Fetches user data from a Json file containing required data.

• Displays user information in a searchable table format: Username, Email, Phone, ID, and Creation date.

• Enables users to search for specific entries (Username, Email, Phone, ID, and Creation date) within the table.

• Users can click on any entry to open a modal with an option to generate/print the report in pdf form for the selected user.


#### Account Creation Tab
• Provides a form for entering username and password details

• Implements dummy request handling upon form submission.

#### Lighthouse Score
The website is optimized for a high Lighthouse score and achieved a score of 100 while testing it [Report attached](./Lighthouse%20Report.pdf).

#### Folder Structure
The project follows a well-defined folder structure to organize the code logically:
```
project-root/
|-- app/
|   |-- layout.jsx
|   |-- page.js
|   |-- global.css
|   |---- register/
|   |-----|-- page.js
|   |---- user-details/
|   |-----|-- page.js
|   |-----|-- modal.js
|   |-----|-- report.js
|   |-----|-- searchInput.js
|   |-----|-- userTable.js
|-- public/
|   |---- database/
|   |-----|-- user.json
|   |---- images
|   |-----|-- logo.png
|   |-----|-- user.png
|-- tailwind.config.js
|-- next.config.js
|-- package.json
|-- ...

```
## Setup

##### Clone the repository

```bash
git clone [https://github.com/Avni17/gne_assignment.git]
```

##### Move to the desired folder

```bash
cd gne_assignment
```

##### To install the dependencies, simply write

```bash
npm install
```

##### To run the app, simply write

```bash
npm run dev
```


