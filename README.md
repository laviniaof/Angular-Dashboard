# Angular Dashboard

In this project, I'm building a simple and easy-to-use dashboard using the Angular Framework to improve my skills and ability with this tool. This README will be used to highlight and explain some features and tools that Angular supports, starting with the easiest and progressing to the more complex explanations.

## Components

- As you can see, we have many components. We have one component that controls the buttons, and we also have a component called 'control'. Why so many components? Well, the first reason is that here we are learning everything about Angular, and we know that in a real-life project we wouldn't need this many components doing the same thing. However, it's a good practice in this case to understand how to create, manipulate, and use components with a hierarchical structure.

- The first thing to consider when creating components inside a folder called 'shared' is that we are sharing behaviors and manipulating them in a way that allows us to reuse them in other components. Reuse is a key concept here and a good practice (it also promotes clean code). For example, we have a component called 'button', and we're reusing the button's behavior in other components, so we don't need to duplicate it.

- To achieve this, we can use content projection, or ng-content, which allows a child component to receive and display dynamic content from the parent component. In this case, the button component is the child, and the other components using it are the parents because they provide the content.
  Additionally, there are other details to explain, such as the selector property in the @Component decorator of the ButtonComponent. As you can see, we've included a comment explaining its purpose.

### Decorators

Soon...

### NOTES

- By using the select property in HTML, we can be selective about which types of content can be projected into one of our components.
