# Student Lab — GitHub Repository Workflow

## Running the app

Pull and run the published image (no need to clone this repo):

```
docker pull ghcr.io/betoinn/platform-demo:latest
docker run -d -p 8080:8080 ghcr.io/betoinn/platform-demo:latest
```

Then check `http://localhost:8080`.

To build and run from source instead:

```
git clone https://github.com/Betoinn/platform-demo.git
cd platform-demo
docker build -t platform-demo .
docker run -d -p 8080:8080 platform-demo
```

## Goal
Work as a team of 3–4. Improve the development workflow around this small Node.js service.

## Tasks
1. Create/fork this repository as `platform-demo`.
2. Add `.github/pull_request_template.md`. It must ask: What changed? Why? Testing? Risks? Checklist.
3. Add `.github/CODEOWNERS`. For class, use `* @YOUR-GITHUB-USERNAME`.
4. Create a branch named `feature/add-version-endpoint`.
5. Add `GET /version`, returning:
```json
{"service":"platform-demo","version":"1.0.0"}
```
6. Add a test for the feature.
7. Open a PR against `main`.
8. Configure `main`: require PR, require 1 approval, resolve conversations, block direct pushes/force pushes. Require CI status checks when CI is available.
9. Have another teammate review, comment, approve, and merge.

## Definition of done
- Feature + test
- PR opened
- PR template used
- CODEOWNERS present
- main protected
- teammate review
- merged PR
