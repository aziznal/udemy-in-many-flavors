// This file includes definitions for all routes used in the app.

class HomeRoutes {
  static get absoluteHomePath(): string {
    return '/';
  }
}

// Login and Sign Up routes
class JoinRoutes {
  static root = 'join';

  static loginDef = 'login';
  static registerDef = 'register';

  static absoluteLoginPath(): string {
    return `/${this.root}/${this.loginDef}`;
  }

  static absoluteRegisterPath(): string {
    return `/${this.root}/${this.registerDef}`;
  }
}

export const AppRoutes = {
  home: HomeRoutes,
  join: JoinRoutes,
}

