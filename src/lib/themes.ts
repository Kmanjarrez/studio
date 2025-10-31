type Theme = {
  name: string;
  label: string;
  activeColor: {
    light: string;
    dark: string;
  };
  accentColor: {
    light: string;
    dark: string;
  };
};


export const themes: Theme[] = [
  {
    name: "blue",
    label: "Azul",
    activeColor: {
      light: "217 91% 60%",
      dark: "217 91% 60%",
    },
    accentColor: {
        light: "160 50% 60%",
        dark: "160 50% 50%",
    }
  },
  {
    name: "green",
    label: "Verde",
    activeColor: {
      light: "142.1 76.2% 36.3%",
      dark: "142.1 70.2% 46.3%",
    },
    accentColor: {
        light: "150 60% 40%",
        dark: "150 70% 35%",
    }
  },
  {
    name: "orange",
    label: "Naranja",
    activeColor: {
      light: "24.6 95% 53.1%",
      dark: "24.6 90% 63.1%",
    },
    accentColor: {
        light: "30 90% 50%",
        dark: "30 80% 60%",
    }
  },
  {
    name: "rose",
    label: "Rosa",
    activeColor: {
      light: "346.8 77.2% 49.8%",
      dark: "346.8 72.2% 59.8%",
    },
    accentColor: {
        light: "340 80% 55%",
        dark: "340 70% 65%",
    }
  },
  {
    name: "violet",
    label: "Violeta",
    activeColor: {
      light: "262.1 83.3% 57.8%",
      dark: "262.1 83.3% 67.8%",
    },
     accentColor: {
        light: "270 70% 60%",
        dark: "270 80% 55%",
    }
  },
];
