export type ID = number;

export interface Role { id: ID; name: string }

export interface User {
  id: ID;
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  roleId: ID;
}

export interface District { id: ID; name: string }

export interface JkhUnit { id: ID; name: string; districtId: ID }

export interface Building {
  id: ID;
  address: string;
  constructionYear?: number;
  description?: string;
  photo?: string;
  districtId: ID;
  jkhUnitId: ID;
  inspectorId?: ID | null;
}

export interface Checklist { id: ID; title: string; description?: string; createdAt: string }
export interface ElementCatalog { id: ID; name: string; category?: string }

export interface ChecklistElement { id: ID; orderIndex?: number; checklistId: ID; elementId: ID }


