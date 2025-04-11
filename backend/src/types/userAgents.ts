

export interface UserAgentObject {
    deviceCategory: "desktop" | "mobile" | "tablet";
    platform: string;
    vendor: string;
    appName: string;
    language: string;
    screenHeight: number;
    screenWidth: number;
    viewportHeight: number;
    viewportWidth: number;
    pluginsLength: number;
}

