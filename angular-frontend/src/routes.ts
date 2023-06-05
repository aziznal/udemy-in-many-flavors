// This file includes definitions for all routes used in the app.

class HomeRoutes {
  get absoluteHomePath(): string {
    return '/';
  }
}

// Login and Sign Up routes
class JoinRoutes {
  static root = 'join';

  static loginDef: 'login';
  static signupDef: 'signup';

  static absoluteLoginPath(): string {
    return `/${this.root}/${this.loginDef}`;
  }

  static absoluteSignupPath(): string {
    return `/${this.root}/${this.signupDef}`;
  }
}

export const routes = {
  home: HomeRoutes,
  join: JoinRoutes,
}

