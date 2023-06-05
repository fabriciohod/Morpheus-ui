# M.C.C.T (Morpheus Character Creator Tool)

![M.C.C.T](./static/FEDERACAO_GALATICA_TITULO.png)

M.C.C.T is a character creator tool for a tabletop RPG called Morpheus. This project is developed using [SvelteKit](https://kit.svelte.dev/), [Skeleton](https://www.skeleton.dev/) UI, and [Tauri](https://tauri.app/). While the final app is currently available only in Brazilian Portuguese, the components and logic are written in English. Feel free to use this code as a reference or as a foundation to build your own character creator.

To download the latest build, visit the [releases](https://github.com/fabriciohod/Morpheus-ui/releases) page. **Windows Only**

## Development

Before getting started, make sure you have [Node.js](https://nodejs.org/) and [Cargo](https://www.rust-lang.org/tools/install) (Rust package manager) installed on your system. Please refer to the respective websites for OS-specific installation guides.

1. After installing Rust and Cargo, follow these steps to install Tauri:
   - Open a terminal and navigate to the root directory of the project.
   - Run the following commands:
     ```shell
     cd ./src-tauri
     cargo build
     ```
   This will download and install Tauri and its dependencies.

2. To install Svelte and Skeleton UI, return to the root directory and run the following command:
   ```shell
   cd ..
   npm install
   ```
   This will install all project dependencies.

   You can now run the project using the following commands:
   ```shell
   # for development
   npm run tauri dev
   # or
   tauri dev

   # to make a build
   npm run tauri build
   # or
   tauri build

   # to create a debug build, add --debug at the end
   tauri build --debug
   ```
   
Please note that the current release is available for Windows only. However, you can build the tool for other platforms using the respective Tauri commands on your target system.