export interface ToolbarProps {
  mode: "list" | "add" | "edit";
  onAdd?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
  isFormComplete?: boolean;
  isSubmitting?: boolean;
}