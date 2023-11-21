#!/usr/bin/env python3

import sys
import os
from os import makedirs, mkdir
from os.path import join
import inquirer

# Constants for folder names
FOLDER_NAMES = ["assets", "stylings", "typings", "services", "helpers"]

# Function to create a folder with a .gitkeep file
def create_folder_with_gitkeep(folder_name):
    mkdir(folder_name)
    with open(f"{folder_name}/.gitkeep", "w") as f:
        f.write("")

# Function to create a file with content
def create_file(file_name, content):
    with open(file_name, "w") as f:
        f.write(content)

def main():
    package_name = input("Enter the package name: ")
    os.makedirs(f"src/{package_name}", 493)
    os.chdir(f"src/{package_name}")
    
    # Calculate component name
    component_name = package_name[0].upper() + package_name[1:]

    # Use inquirer to create a checkbox prompt for folder selection
    questions = [
        inquirer.Checkbox(
            "folders",
            message="Select folders to create:",
            choices=FOLDER_NAMES,
        )
    ]
    answers = inquirer.prompt(questions)

    selected_folders = answers["folders"]
    if "All" in selected_folders:
        selected_folders = FOLDER_NAMES
    else:
        selected_folders = [folder for folder in selected_folders if folder != "All"]

    for folder_name in selected_folders:
        create_folder_with_gitkeep(folder_name)


    # Create hooks folder
    hooks_folder = "hooks"
    mkdir(hooks_folder)
    hooks_content = f'export {{ use{component_name} }} from "./use{component_name}";\n'
    create_file(f"{hooks_folder}/index.ts", hooks_content)

    # Create hooks files
    hooks_content = (
        f'export const use{component_name} = () => {{\n  console.log({component_name});\n}};\n'
    )
    create_file(f"{hooks_folder}/use{component_name}.ts", hooks_content)

    # Create i18n folder
    i18n_folder = "i18n"
    mkdir(i18n_folder)
    i18n_content = (
        f'import en from "./en.json";\n'
        f'import fr from "./fr.json";\n\n'
        f'export const {component_name} = {{ en, fr }};\n'
    )
    create_file(f"{i18n_folder}/index.ts", i18n_content)

    # Create i18n files
    i18n_content = (
        f'{{\n  "title": "{component_name}"\n}}'
    )
    create_file(f"{i18n_folder}/fr.json", i18n_content)
    create_file(f"{i18n_folder}/en.json", i18n_content)

    # Create components folder
    components_folder = "components"
    mkdir(components_folder)
    components_content = (
        f'import {component_name} from "./{component_name}";\n\n'
        f'export {{ {component_name} }};\n'
    )
    create_file(f"{components_folder}/index.ts", components_content)

    # Create component file
    component_content = (
        f'import React, {{ FC }} from "react";\n'
        f'import {{ useTranslation }} from "react-i18next";\n\n'
        f'import {{ use{component_name} }} from "../hooks";\n\n'
        f'export const {component_name}: FC = () => {{\n'
        f'  const {{ t }} = useTranslation("{component_name}");\n\n'
        f'  use{component_name}();\n\n'
        f'  return (\n'
        f'    <>\n'
        f'      <h1>{component_name} page</h1>\n'
        f'      <p>{{t("title")}}</p>\n'
        f'    </>\n'
        f'  );\n'
        f'}};\n'
    )
    create_file(f"{components_folder}/{component_name}.tsx", component_content)

    # Create packageName/index.ts
    index_content = (
        f'export {{ {component_name} }} from "./components";\n'
    )
    create_file(f"index.ts", index_content)

    # Add import to resources.ts
    resources_path = join("..", "i18n", "resources.ts")
    with open(resources_path, "r") as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        new_lines.append(line)
        if 'import { Core } from "@/core/i18n";' in line:
            new_lines.append(f'import {{ {component_name} }} from "@/{package_name}/i18n";\n')
        elif 'Core,' in line:
            new_lines.append(f'  {component_name},\n')

    with open(resources_path, "w") as f:
        f.writelines(new_lines)

    print(f"Created src/{package_name} successfully")

if __name__ == '__main__':
    main()
