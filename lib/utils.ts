// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================
// This file contains helper utility functions used throughout the project.
//
// CN FUNCTION (Class Name):
// This function combines CSS class names safely.
// It's used to merge Tailwind CSS classes and handle conditional classes.
//
// HOW IT WORKS:
// - Takes multiple class name inputs (strings, arrays, objects)
// - Combines them using clsx (handles conditionals)
// - Merges them using twMerge (resolves Tailwind conflicts)
// - Returns a single string of class names
//
// EXAMPLE USAGE:
// cn("text-primary", isActive && "bg-primary", className)
// This would combine "text-primary" with conditional "bg-primary" and any additional classes
// ============================================================================

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// ============================================================================
// CN FUNCTION
// ============================================================================
// Combines class names safely, handling Tailwind CSS conflicts.
// You don't need to modify this function - it's a utility used by components.
// ============================================================================
export function cn(...inputs: ClassValue[]) {
  // First, use clsx to combine all class inputs (handles conditionals, arrays, etc.)
  // Then, use twMerge to resolve any Tailwind CSS class conflicts
  // (e.g., if you have both "p-4" and "p-8", it keeps only "p-8")
  return twMerge(clsx(inputs))
}

