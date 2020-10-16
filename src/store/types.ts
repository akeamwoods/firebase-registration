export type User = {
  email: string;
  id: string;
};

export type Alert = {
  id: string;
  title: string;
  message: string;
  duration: number | undefined;
  dismissible: boolean;
};
