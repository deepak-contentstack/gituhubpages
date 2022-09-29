declare const _default: ({
    jira: string;
    Title: string;
    description: string;
    html: string;
    fragment: ({
        type: string;
        attrs: {
            url: string;
            width: number;
            src: any;
        };
        children: {
            text: string;
        }[];
    } | {
        type: string;
        attrs: {
            url?: undefined;
            width?: undefined;
            src?: undefined;
        };
        children: {
            text: string;
        }[];
    })[];
} | {
    jira: string;
    Title: string;
    description: string;
    html: string;
    fragment: {
        type: string;
        attrs: {};
        children: ({
            type: string;
            attrs: {
                url: string;
                style?: undefined;
            };
            children: {
                text: string;
            }[];
            text?: undefined;
        } | {
            text: string;
            attrs: {
                style: {};
                url?: undefined;
            };
            type?: undefined;
            children?: undefined;
        })[];
    }[];
} | {
    jira: string;
    Title: string;
    description: string;
    html: string;
    fragment: {
        type: string;
        attrs: {
            rows: number;
            cols: number;
            colWidths: number[];
        };
        children: {
            type: string;
            attrs: {};
            children: {
                type: string;
                attrs: {};
                children: {
                    type: string;
                    attrs: {};
                    children: {
                        type: string;
                        attrs: {};
                        children: {
                            text: string;
                        }[];
                    }[];
                }[];
            }[];
        }[];
    }[];
} | {
    jira: string;
    Title: string;
    description: string;
    html: string;
    fragment: ({
        type: string;
        children: {
            text: string;
        }[];
        attrs?: undefined;
    } | {
        type: string;
        attrs: {};
        children: ({
            type: string;
            attrs: {};
            children: ({
                type: string;
                attrs: {
                    url: string;
                };
                children: {
                    text: string;
                    attrs: {
                        style: {
                            color: string;
                        };
                    };
                }[];
                text?: undefined;
            } | {
                text: string;
                type?: undefined;
                attrs?: undefined;
                children?: undefined;
            })[];
        } | {
            type: string;
            attrs: {};
            children: {
                type: string;
                attrs: {};
                children: {
                    text: string;
                }[];
            }[];
        } | {
            type: string;
            attrs: {};
            children: ({
                text: string;
                attrs: {
                    style: {
                        color: string;
                    };
                };
                bold: boolean;
            } | {
                text: string;
                attrs?: undefined;
                bold?: undefined;
            })[];
        })[];
    })[];
} | {
    jira: string;
    Title: string;
    description: string;
    html: string;
    fragment: ({
        type: string;
        attrs: {
            style: {
                "text-align": string;
            };
        };
        children: {
            text: string;
            strikethrough: boolean;
        }[];
    } | {
        type: string;
        attrs: {
            style: {
                "text-align": string;
            };
        };
        children: {
            text: string;
        }[];
    })[];
} | {
    jira: string;
    Title: string;
    description: string;
    html: string;
    fragment: {
        type: string;
        attrs: {};
        children: ({
            text: string;
            bold: boolean;
            italic?: undefined;
            underline?: undefined;
            subscript?: undefined;
            superscript?: undefined;
            strikethrough?: undefined;
        } | {
            text: string;
            italic: boolean;
            bold?: undefined;
            underline?: undefined;
            subscript?: undefined;
            superscript?: undefined;
            strikethrough?: undefined;
        } | {
            text: string;
            underline: boolean;
            bold?: undefined;
            italic?: undefined;
            subscript?: undefined;
            superscript?: undefined;
            strikethrough?: undefined;
        } | {
            text: string;
            subscript: boolean;
            bold?: undefined;
            italic?: undefined;
            underline?: undefined;
            superscript?: undefined;
            strikethrough?: undefined;
        } | {
            text: string;
            superscript: boolean;
            bold?: undefined;
            italic?: undefined;
            underline?: undefined;
            subscript?: undefined;
            strikethrough?: undefined;
        } | {
            text: string;
            strikethrough: boolean;
            bold?: undefined;
            italic?: undefined;
            underline?: undefined;
            subscript?: undefined;
            superscript?: undefined;
        })[];
    }[];
} | {
    jira: string;
    Title: string;
    description: string;
    html: string;
    fragment: ({
        type: string;
        attrs: {};
        children: ({
            type: string;
            attrs: {
                url: string;
                style?: undefined;
            };
            children: {
                text: string;
                break: boolean;
            }[];
            text?: undefined;
            bold?: undefined;
        } | {
            text: string;
            attrs: {
                style: {};
                url?: undefined;
            };
            bold: boolean;
            type?: undefined;
            children?: undefined;
        })[];
    } | {
        type: string;
        attrs: {};
        children: ({
            text: string;
            attrs: {
                style: {};
            };
            bold: boolean;
        } | {
            text: string;
            attrs: {
                style: {};
            };
            bold?: undefined;
        })[];
    } | {
        type: string;
        attrs: {};
        children: {
            type: string;
            attrs: {};
            children: {
                text: string;
            }[];
        }[];
    } | {
        type: string;
        attrs: {};
        children: ({
            type: string;
            attrs: {
                url: string;
                style?: undefined;
            };
            children: {
                text: string;
                break: boolean;
            }[];
            text?: undefined;
        } | {
            text: string;
            attrs: {
                style: {};
                url?: undefined;
            };
            type?: undefined;
            children?: undefined;
        })[];
    })[];
})[];
export default _default;
