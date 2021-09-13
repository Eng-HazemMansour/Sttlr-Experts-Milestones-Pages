import duration from './duration.svg'
import duration2 from './duration2.svg'
import profilepic from './profilepic.svg'
import lgprofilepic from './lgprofilepic.svg'
import verified1 from './verified1.svg'
import verified2 from './verified2.svg'
import gold from './gold.svg'
import silver from './silver.svg'
import bronze from './bronze.svg'
import stlogo from './stlogo.svg'
import complogo from './complogo.svg'
import './App.css';
import { Grid, Container } from '@material-ui/core';

function Products() {

    return (


        <Container maxWidth="lg" className="container" style={{ background: 'rgba(236, 241, 244, 0.54)' }}>
            <Grid container spacing={3}>

                <Grid item lg={4}
                    style={{
                        background: "transparent"
                    }}>
                </Grid>

                <Grid item lg={4}>
                    <div className="is-flex aic jcsb"
                        style={{
                            width: "376px",
                            height: "50px",
                            marginTop: "16px",
                            background: "#FFFFFF",
                            borderRadius: "8px"
                        }}>
                        <a className="titles is-flex aic jcsb"
                            style={{ marginLeft: "20px" }}
                        >Chats</a>

                        <a className="titles is-flex aic jcsb"
                            style={{ color: "#272AEE", fontWeight: "bold" }}
                        >Experts</a>

                        <a className="titles is-flex aic jcsb"
                            style={{ marginLeft: "20px" }}
                        >Docs</a>

                        <a className="titles is-flex aic jcsb"
                            style={{ marginRight: "40px" }}
                        >Summary</a>
                    </div>
                </Grid>

                <Grid item lg={1}
                    style={{
                        background: "transparent"
                    }}>
                </Grid>

                <Grid item lg={3}
                    style={{
                        marginTop: "36px",
                        marginBottom: "40px",

                        width: "306px",
                        height: "32px",
                        borderRadius: "4px",
                        background: "#0ACF83",
                        cursor: "pointer",
                    }}>
                    <label className="titles"
                        style={{
                            position: "relative",
                            left: "130px",
                            top: "-8px",
                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "16px",
                            lineHeight: "19px",
                            textAlign: "center",

                            color: "#FFFFFF"
                        }}
                    >PAY</label>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item lg={9}
                    style={{
                        width: "879px",
                        height: "692px",
                        maxHeight: "692px",
                        maxWidth: "930px",
                        overflowY: "auto",

                        background: "#FFFFFF"
                    }}>

                    <Grid item lg={3} >
                        <img src={complogo} style={{
                            width: "32px",
                            height: "32px",
                            position: "relative",
                            top: "17px",
                            marginLeft: "24px"

                        }}></img>
                    </Grid>


                    <Grid item lg={3} >
                        <img src={stlogo} style={{
                            width: "32px",
                            height: "32px",
                            position: "relative",
                            top: "-9px",
                            marginLeft: "42.95px"
                        }}></img>
                    </Grid>


                    <Grid item lg={6} style={{ marginTop: "-36px", marginBottom: "26px" }}>
                        <label style={{
                            position: "relative",
                            width: "213px",
                            height: "22px",
                            marginLeft: "79px",
                            marginBottom: "80px",
                            // top: "28px",

                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "18px",
                            lineHeight: "22px",

                            color: "#585858"
                        }}>
                            Company Name, Stllr
                        </label>
                    </Grid>

                    <div style={{ borderBottom: "1px solid #E5E5E5", marginBottom: "26px" }}></div>


                    <Grid item lg={12} >
                        <div style={{ marginBottom: "17px", marginLeft: "68px" }}>
                            <label style={{
                                height: "22px",

                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "18px",
                                lineHeight: "22px",
                                /* identical to box height */


                                color: "#C4C4C4"
                            }}>
                                Name
                            </label>

                            <label style={{
                                height: "22px",
                                marginLeft: "253px",

                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "18px",
                                lineHeight: "22px",
                                /* identical to box height */


                                color: "#C4C4C4"

                            }}>
                                Status
                            </label>

                            <label style={{
                                height: "22px",
                                marginLeft: "192px",

                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "18px",
                                lineHeight: "22px",
                                /* identical to box height */


                                color: "#C4C4C4"
                            }}>
                                Role
                            </label>
                        </div>
                    </Grid>

                    <div style={{ borderTop: "1px solid #E1E3E6" }}>
                        <div
                            style={{
                                marginTop: "20px",
                                marginBottom: "10px",
                            }}>

                            <Grid container spacing={0}>
                                <Grid item lg={12} >
                                    <div className="is-flex aic jcsb" style={{ marginLeft: "62px", width: "635px", marginBottom: "25px" }}>
                                        <div className="is-flex aic" style={{ width: "0px" }}>
                                            <img src={profilepic} alt="Profile" style={{
                                                width: "41.45px",
                                                height: "41.45px",
                                                borderRadius: "50%",
                                            }}></img>
                                            <a href="" className="link" style={{
                                                position: "relative",
                                                marginLeft: "20px",
                                                height: "25px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858"

                                            }}>
                                                Robert
                                            </a>

                                            <img src={verified1} alt="Verified Icon" style={{
                                                position: "relative",
                                                width: "16px",
                                                height: "16px",
                                                marginLeft: "13.42px",
                                            }}></img>

                                            <img src={verified2} style={{
                                                position: "relative",
                                                width: "7.83px",
                                                height: "5.67px",
                                                right: "12px",
                                            }}></img>
                                        </div>

                                        <div className="is-flex aic jcsb" style={{ marginLeft: "288px" }}>
                                            <img src={silver} alt="Gold Tier" style={{
                                                position: "relative",
                                                width: "8px",
                                                height: "8px",
                                            }}></img>

                                            <label style={{
                                                position: "relative",
                                                height: "25px",
                                                width: "93px",
                                                marginLeft: "13px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858",
                                            }}>
                                                Silver Tier
                                            </label>
                                        </div>


                                        <div className="is-flex aic jcsb" style={{ width: "200px" }}>
                                            <label style={{
                                                position: "relative",
                                                height: "17px",
                                                paddingLeft: "6px",
                                                paddingRight: "6px",
                                                paddingTop: "1.3px",
                                                paddingBottom: "1.5px",
                                                left: "110px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                /* identical to box height */

                                                background: "rgba(39, 42, 238, 0.22)",
                                                borderRadius: "4px",


                                                color: "#05063E"
                                            }}>
                                                Content creation
                                            </label>
                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                </Grid>
                            </Grid>

                            <Grid container spacing={0}>
                                <Grid item lg={12} >
                                    <div className="is-flex aic jcsb" style={{ marginLeft: "62px", width: "635px", marginBottom: "25px" }}>
                                        <div className="is-flex aic" style={{ width: "0px" }}>
                                            <img src={profilepic} alt="Profile" style={{
                                                width: "41.45px",
                                                height: "41.45px",
                                                borderRadius: "50%",
                                            }}></img>
                                            <a href="" className="link" style={{
                                                position: "relative",
                                                marginLeft: "20px",
                                                height: "25px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858"

                                            }}>
                                                Robert
                                            </a>

                                            <img src={verified1} alt="Verified Icon" style={{
                                                position: "relative",
                                                width: "16px",
                                                height: "16px",
                                                marginLeft: "13.42px",
                                            }}></img>

                                            <img src={verified2} style={{
                                                position: "relative",
                                                width: "7.83px",
                                                height: "5.67px",
                                                right: "12px",
                                            }}></img>
                                        </div>

                                        <div className="is-flex aic jcsb" style={{ marginLeft: "288px" }}>
                                            <img src={bronze} alt="Gold Tier" style={{
                                                position: "relative",
                                                width: "8px",
                                                height: "8px",
                                            }}></img>

                                            <label style={{
                                                position: "relative",
                                                height: "25px",
                                                width: "93px",
                                                marginLeft: "13px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858",
                                            }}>
                                                Bronze Tier
                                            </label>
                                        </div>


                                        <div className="is-flex aic jcsb" style={{ width: "200px" }}>
                                            <label style={{
                                                position: "relative",
                                                height: "17px",
                                                paddingLeft: "6px",
                                                paddingRight: "6px",
                                                paddingTop: "1.3px",
                                                paddingBottom: "1.5px",
                                                left: "110px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                /* identical to box height */

                                                background: "rgba(39, 42, 238, 0.22)",
                                                borderRadius: "4px",


                                                color: "#05063E"
                                            }}>
                                                Social Media
                                            </label>
                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                </Grid>
                            </Grid>

                            <Grid container spacing={0}>
                                <Grid item lg={12} >
                                    <div className="is-flex aic jcsb" style={{ marginLeft: "62px", width: "635px", marginBottom: "25px" }}>
                                        <div className="is-flex aic" style={{ width: "0px" }}>
                                            <img src={profilepic} alt="Profile" style={{
                                                width: "41.45px",
                                                height: "41.45px",
                                                borderRadius: "50%",
                                            }}></img>
                                            <a href="" className="link" style={{
                                                position: "relative",
                                                marginLeft: "20px",
                                                height: "25px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858"

                                            }}>
                                                Robert
                                            </a>

                                            <img src={verified1} alt="Verified Icon" style={{
                                                position: "relative",
                                                width: "16px",
                                                height: "16px",
                                                marginLeft: "13.42px",
                                            }}></img>

                                            <img src={verified2} style={{
                                                position: "relative",
                                                width: "7.83px",
                                                height: "5.67px",
                                                right: "12px",
                                            }}></img>
                                        </div>

                                        <div className="is-flex aic jcsb" style={{ marginLeft: "288px" }}>
                                            <img src={gold} alt="Gold Tier" style={{
                                                position: "relative",
                                                width: "8px",
                                                height: "8px",
                                            }}></img>

                                            <label style={{
                                                position: "relative",
                                                height: "25px",
                                                width: "93px",
                                                marginLeft: "13px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858",
                                            }}>
                                                Gold Tier
                                            </label>
                                        </div>


                                        <div className="is-flex aic jcsb" style={{ width: "200px" }}>
                                            <label style={{
                                                position: "relative",
                                                height: "17px",
                                                paddingLeft: "6px",
                                                paddingRight: "6px",
                                                paddingTop: "1.3px",
                                                paddingBottom: "1.5px",
                                                left: "110px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                /* identical to box height */

                                                background: "rgba(39, 42, 238, 0.22)",
                                                borderRadius: "4px",


                                                color: "#05063E"
                                            }}>
                                                Content creation
                                            </label>
                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                </Grid>
                            </Grid>

                            <Grid container spacing={0}>
                                <Grid item lg={12} >
                                    <div className="is-flex aic jcsb" style={{ marginLeft: "62px", width: "635px", marginBottom: "25px" }}>
                                        <div className="is-flex aic" style={{ width: "0px" }}>
                                            <img src={profilepic} alt="Profile" style={{
                                                width: "41.45px",
                                                height: "41.45px",
                                                borderRadius: "50%",
                                            }}></img>
                                            <a href="" className="link" style={{
                                                position: "relative",
                                                marginLeft: "20px",
                                                height: "25px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858"

                                            }}>
                                                Robert
                                            </a>

                                            <img src={verified1} alt="Verified Icon" style={{
                                                position: "relative",
                                                width: "16px",
                                                height: "16px",
                                                marginLeft: "13.42px",
                                            }}></img>

                                            <img src={verified2} style={{
                                                position: "relative",
                                                width: "7.83px",
                                                height: "5.67px",
                                                right: "12px",
                                            }}></img>
                                        </div>

                                        <div className="is-flex aic jcsb" style={{ marginLeft: "288px" }}>
                                            <img src={silver} alt="Gold Tier" style={{
                                                position: "relative",
                                                width: "8px",
                                                height: "8px",
                                            }}></img>

                                            <label style={{
                                                position: "relative",
                                                height: "25px",
                                                width: "93px",
                                                marginLeft: "13px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858",
                                            }}>
                                                Silver Tier
                                            </label>
                                        </div>


                                        <div className="is-flex aic jcsb" style={{ width: "200px" }}>
                                            <label style={{
                                                position: "relative",
                                                height: "17px",
                                                paddingLeft: "6px",
                                                paddingRight: "6px",
                                                paddingTop: "1.3px",
                                                paddingBottom: "1.5px",
                                                left: "110px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                /* identical to box height */

                                                background: "rgba(39, 42, 238, 0.22)",
                                                borderRadius: "4px",


                                                color: "#05063E"
                                            }}>
                                                Content creation
                                            </label>
                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                </Grid>
                            </Grid>

                            <Grid container spacing={0}>
                                <Grid item lg={12} >
                                    <div className="is-flex aic jcsb" style={{ marginLeft: "62px", width: "635px", marginBottom: "25px" }}>
                                        <div className="is-flex aic" style={{ width: "0px" }}>
                                            <img src={profilepic} alt="Profile" style={{
                                                width: "41.45px",
                                                height: "41.45px",
                                                borderRadius: "50%",
                                            }}></img>
                                            <a href="" className="link" style={{
                                                position: "relative",
                                                marginLeft: "20px",
                                                height: "25px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858"

                                            }}>
                                                Robert
                                            </a>

                                            <img src={verified1} alt="Verified Icon" style={{
                                                position: "relative",
                                                width: "16px",
                                                height: "16px",
                                                marginLeft: "13.42px",
                                            }}></img>

                                            <img src={verified2} style={{
                                                position: "relative",
                                                width: "7.83px",
                                                height: "5.67px",
                                                right: "12px",
                                            }}></img>
                                        </div>

                                        <div className="is-flex aic jcsb" style={{ marginLeft: "288px" }}>
                                            <img src={gold} alt="Gold Tier" style={{
                                                position: "relative",
                                                width: "8px",
                                                height: "8px",
                                            }}></img>

                                            <label style={{
                                                position: "relative",
                                                height: "25px",
                                                width: "93px",
                                                marginLeft: "13px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "18px",
                                                lineHeight: "140%",
                                                /* or 25px */


                                                color: "#585858",
                                            }}>
                                                Gold Tier
                                            </label>
                                        </div>


                                        <div className="is-flex aic jcsb" style={{ width: "200px" }}>
                                            <label style={{
                                                position: "relative",
                                                height: "17px",
                                                paddingLeft: "6px",
                                                paddingRight: "6px",
                                                paddingTop: "1.3px",
                                                paddingBottom: "1.5px",
                                                left: "110px",

                                                fontFamily: "Lato",
                                                fontStyle: "normal",
                                                fontWeight: "normal",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                /* identical to box height */

                                                background: "rgba(39, 42, 238, 0.22)",
                                                borderRadius: "4px",


                                                color: "#05063E"
                                            }}>
                                                Social Media
                                            </label>
                                        </div>
                                    </div>
                                    <div className="hrline"></div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>


                <Grid item lg={3}
                    style={{
                        height: "692px",
                        maxHeight: "692px",
                        overflowY: "auto",
                        marginLeft: "10px",

                        background: "#FFFFFF",
                        borderRadius: "8px",
                    }}>

                    <Grid item lg={12}>
                        <div className="is-flex aic"
                            style={{
                                marginTop: "60px",
                                justifyContent: "center",
                                marginBottom: "8px",
                            }}>
                            <img src={lgprofilepic} style={{
                                width: "103.2px",
                                height: "103.2px",
                                borderRadius: "50px"
                            }}>
                            </img>
                        </div>
                    </Grid>

                    <Grid item lg={12}>
                        <div className="is-flex aic" style={{ justifyContent: "center", marginBottom: "16px", borderBottom: "1px solid #EDECEC" }}>
                            <label style={{
                                height: "55px",
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "bold",
                                fontSize: "18px",
                                lineHeight: "140%",
                                /* identical to box height */


                                color: "#585858"
                            }}>
                                Robert
                            </label>
                            <img src={bronze} style={{
                                position: "relative",
                                top: "-15px",
                                marginLeft: "7px",
                            }} />
                        </div>
                    </Grid>

                    <Grid item lg={12} style={{ marginBottom: "9px", marginLeft: "22px" }}>
                        <label style={{
                            height: "17px",

                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "14px",
                            lineHeight: "17px",
                            /* identical to box height */


                            color: "#585858"
                        }}>
                            JBTDs
                        </label>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="is-flex" style={{ borderBottom: "1px solid #EDECEC" }}>

                            <div className="is-flex" style={{
                                width: "37.52px",
                                height: "37.52px",
                                justifyContent: "center",

                                background: "#FFFFFF",
                                border: "1px solid #ECF1F4",
                                boxSizing: "border-box",
                                borderRadius: "4px",
                            }}>
                                <label style={{
                                    height: "16px",
                                    marginLeft: "2px",
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center",

                                    fontFamily: "Lato",
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    fontSize: "13px",
                                    lineHeight: "16px",
                                    /* identical to box height */


                                    color: "#585858",
                                }}>
                                    22 NOV
                                </label>
                            </div>

                            <div className="is-flex" style={{
                                height: "14px",
                                marginLeft: "6.13px",

                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "bold",
                                fontSize: "12px",
                                lineHeight: "14px",
                                textAlign: "center",

                                color: "#585858"

                            }}>
                                Milestone Name
                            </div>
                            <div style={{
                                height: "12px",
                                marginLeft: "6px",
                                // marginLeft: "105px",
                                paddingLeft: "2px",
                                paddingRight: "3px",
                                paddingTop: "1.3px",
                                paddingBottom: "1.5px",

                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "10px",
                                lineHeight: "12px",
                                /* identical to box height */


                                color: "#38763E",
                                background: "rgba(10, 207, 131, 0.17)"
                            }}>
                                Done
                            </div>
                            <div style={{
                                position: "relative",
                                left: "-124px",
                                top: "15px",
                                height: "24px",

                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "10px",
                                lineHeight: "12px",

                                color: "#585858"
                            }}>
                                Service Details
                            </div>
                            {/* <div className="" style={{
                                // height: "24px",
                                // marginTop: "10px",
                                // marginLeft: "-123px",

                                // fontFamily: "Lato",
                                // fontStyle: "normal",
                                // fontWeight: "normal",
                                // fontSize: "10px",
                                // lineHeight: "12px",

                                // color: "#585858"
                            }}>
                                Service Details,Service Details,Service Details,
                                Service Details.
                            </div> */}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    );
}

export default Products;
