# React.js Project Setup and Environment Guide

## Prerequisites

Before setting up the environment, ensure the following tools and software are installed:

1. **Node.js** (LTS version recommended)

   - Download and install Node.js from [Node.js Official Website](https://nodejs.org/).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Package Manager**

   - `npm` (comes with Node.js) or `yarn`.
   - Install `yarn` if preferred:
     ```bash
     npm install -g yarn
     ```



---

## Project Setup

### 1. Cloning the Repository

- Clone the project repository:
  ```bash
  git clone https://github.com/your-username/Techsouq_Technologies.git
  cd Techsouq       
  ```

### 2. Setting Up Upstream for Your Fork

- Add upstream for ypur project repository:
  ```bash
  git remote add upstream https://github.com/original-owner/Techsouq_Technologies.git
  ```

### 3. Create branch

- Create your own branch for project repository
  ```bash
  git checkout -b your-feature-branch
  ```

### 4. Add your task

- Add the updated task:
  ```bash
  git add .
  ```

### 5. Committing the task

- Commit the task with some meaningful message:
  ```bash
  git commit -m 'Description of changes'
  ```

### 6. Push the task

- Push your updated task:
  ```bash
  git push origin your-feature-branch
  ```

### 7. Pull Request

Then create a pull request on GitHub

# frontend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```
