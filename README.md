<p align="center">
  <img height="150px" src="https://raw.githubusercontent.com/davejs-playground/.github/main/davejs-logo.svg"  />
</p>

# resume.davejs.dev

This is my resume built on Vite + React + TypeScript.

## Motivations

The goal of this project is to demonstrate my software development skills and preferences by using web technologies I enjoy to build a small resume website. This project is intentionally over-engineered with excessive plugins, tools, and automation scripts. This setup is overkill for such a small project with just a single developer but would be useful in a growing project with several contributors.

## TODOs

While the end product is functionally complete, there are a few things I'd like to add in terms of tooling:

- Storybook: for developing and testing different variants of components
- Playwright: for visual regression testing
- Stylelint: for ensuring CSS is clean (I'd especially like to lint for rational-ordering, which keeps properties with similar functionality grouped closely)
- bundlesize: I'd like to add bundlesize check for extreme bloat. Sometimes you can accidentally include deps that are way too heavy for what they do and it's better to just write something yourself.
