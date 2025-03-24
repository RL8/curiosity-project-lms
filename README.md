# Floorbook Approach LMS

A Learning Management System focused on the Floorbook Approach to inquiry-based learning.

## Project Overview

This application provides a comprehensive learning platform for educators to explore and master the Floorbook Approach methodology. The system includes courses at various levels (Foundation, Beginner, Intermediate, Advanced) with interactive modules covering different aspects of inquiry-based learning.

## Architecture

The project follows a clean, maintainable React architecture without overengineering:

1. **Component Structure**
   - Feature-based organization
   - Shared components for reusability
   - Clear separation of concerns

2. **State Management**
   - React Context API for global state
   - Local component state for UI-specific state
   - Custom hooks for reusable logic

3. **Data Flow**
   - Unidirectional data flow
   - Props for component communication
   - Context for deeply nested components

## Development Workflow

1. **Setup Phase**
   - Install dependencies
   - Configure development environment

2. **Implementation Phase**
   - Create core components
   - Implement features
   - Style components

3. **Testing Phase**
   - Component testing
   - Integration testing
   - User testing

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve
```

## Implementation Status

- [x] Project setup
- [ ] Core components
- [ ] Course dashboard
- [ ] Module viewer
- [ ] Progress tracking
- [ ] User authentication
