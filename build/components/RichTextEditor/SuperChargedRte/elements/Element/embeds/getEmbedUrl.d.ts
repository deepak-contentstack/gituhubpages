declare function embed(url?: string): any;
declare namespace embed {
    var info: (url: any) => {
        id: any;
        source: string;
        url: any;
    };
    var videoSource: (url: any) => {
        id: any;
        source: string;
        url: any;
    };
    var vimeo: (id: any, opts: any) => string;
    var youtube: (id: any, opts: any) => string;
    var dailymotion: (id: any, opts: any) => string;
}
export default embed;
