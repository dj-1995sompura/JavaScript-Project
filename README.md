# JavaScript Project Collection

This repository is a collection of small JavaScript projects, exercises and experiments we've built. Use this repo to store, run, and share the JavaScript work we complete.

## Repository Structure

- `projects/` — all projects live in their own subfolders (recommended).
- `README.md` — this file (how to add and document projects).

Example layout:

```
projects/
	project-name-1/
		README.md        # project description + run instructions
		package.json     # optional, if project uses npm
		src/             # source files
		index.html       # optional for browser demos
	project-name-2/
		...
```

## How to Add a Project

1. Create a new folder under `projects/` using kebab-case (e.g. `my-todo-app`).
2. Add a `README.md` inside the project folder with:
	 - short description
	 - prerequisites (Node version, browser, etc.)
	 - install and run commands
	 - features and notes
3. Add a `package.json` if the project needs npm scripts or dependencies:

```powershell
npm init -y
npm install <dependency>
```

4. Commit and push your changes. If collaborating, open a pull request for review.

## Project README Template

Use this minimal template for each project's `README.md`:

```
# Project Title

Short description of the project.

## Prerequisites
- Node.js >= 14 (if applicable)

## Install
```powershell
npm install
```

## Run
```powershell
npm start   # or: node src/index.js
```

## Notes
- Any additional details or links
```

## Conventions

- Folder names: `kebab-case` (lowercase, hyphens).
- Include a project-level `README.md` describing how to run the project.
- Keep unrelated projects isolated to their own folder.

## License

This repository does not impose a license by default — add a license file if you want to apply one. If you prefer, add `LICENSE` at the repo root.

## Contact

If you have questions or want to contribute, open an issue or send a PR.

---

## Projects

Add an entry below for each project (title + short description).

- (placeholder) `projects/example-project` — Example project demonstrating X.

Happy coding!
