# Future Plans - Phase 2 & Beyond

This document outlines the roadmap for the **Naruto Intro** project. Phase 1 (Foundation) is complete. Phase 2 focuses on adding content and interactivity.

## Phase 2: Content Expansion

The primary goal of Phase 2 is to transform the empty shell into a rich information source about Naruto.

### 1. Character Database
*   **Feature**: A list of main characters (Naruto, Sasuke, Sakura, Kakashi).
*   **Details**:
    *   Create a `Character` interface/model.
    *   Create a `CharacterService` to fetch character data (mock data initially).
    *   Create a `CharacterListComponent` to display cards for each character.
    *   Create a `CharacterDetailComponent` for in-depth info.

### 2. Jutsu Encyclopedia
*   **Feature**: A catalog of Jutsus (techniques).
*   **Details**:
    *   Categorize by type (Ninjutsu, Genjutsu, Taijutsu).
    *   Search/Filter functionality.

### 3. Village Guide
*   **Feature**: Information about the Hidden Villages.
*   **Details**:
    *   Interactive map or list of villages (Konoha, Suna, etc.).
    *   Symbols and Kage information.

## Phase 3: Interactivity & Advanced Features

*   **Quiz Module**: Test your Naruto knowledge.
*   **API Integration**: Connect to a real Naruto API (if available) or build a backend.
*   **State Management**: Introduce NgRx or Akita if the app grows complex.

## Phase 4: UI/UX Polish

*   **Theming**: Add a dark mode or village-specific themes.
*   **Animations**: Use Angular Animations for page transitions and jutsu effects.
