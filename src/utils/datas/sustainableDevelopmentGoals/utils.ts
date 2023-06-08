export type SustainableDevelopmentGoal = {
  title: string;
  subtitle: string;
  topics: Array<{
    goal?: string;
    description?: string;
    title?: string;
    subtopics?: Array<{
      goal?: string;
      description?: string;
    }>;
  }>;
  notes?: Array<{
    marking: string;
    description: string;
  }>;
  color: string;
};
