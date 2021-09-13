import React from 'react';
import { Container, Grid, Select, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, MenuItem } from '@material-ui/core';

export default function Test() {



  return (






    
    <Container maxWidth="lg" className="mt-12 experts-container" >
      <h2 className="pink" style={{ fontSize: 36, marginBottom: 24 }}>
        Choose your Experts!
      </h2>
      <p style={{ fontSize: 18, lineHeight: 1.5, marginBottom: 20 }}>
        Here are the experts that our platforms recommends for you based on
        the plan(s).
      </p>
      <Grid container spacing={3} style={{ marginBottom: 0 }} justify="center">
        <Grid item lg={3}>
          <Select
            styles={{
              // Fixes the overlapping problem of the component
              menu: provided => ({ ...provided, zIndex: 9999 })
            }}
          >
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={2}>
        <Select
            styles={{
              // Fixes the overlapping problem of the component
              menu: provided => ({ ...provided, zIndex: 9999 })
            }}
          >
            <MenuItem value="10">Thirty</MenuItem>
            <MenuItem value="20">Fourty</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={3}>
        <Select
            styles={{
              // Fixes the overlapping problem of the component
              menu: provided => ({ ...provided, zIndex: 9999 })
            }}
          >
            <MenuItem value="10">Fifty</MenuItem>
            <MenuItem value="20">Sixty</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={3}>
          <FormGroup
            style={{ position: "relative" }}
          >
            <label style={{ color: "red", position: "absolute", top: -8, right: 0, fontSize: 11, fontWeight: 700, borderRadius: 4, backgroundColor: "rgba(255, 90, 90, 0.4)", padding: 3 }}>NEW</label>
            <FormControlLabel
              value="1:1 growth advice for 1 hour"
              control={
                <Checkbox
                  checked={true}
                />
              }
              label="1:1 growth advice for 1 hour"
            />
          </FormGroup>
        </Grid>
      </Grid>
      <hr style={{ marginBottom: 35 }} />
      <Grid container direction="row" style={{ marginBottom: 50 }}>
        <Grid
          item
          lg={9}
          style={{
            padding: "0px 30px 30px 0px",
            borderRadius: 20,
            zIndex: 999,
          }}
        >
          <RadioGroup
            name="expert_id"
            value={"selectedExpertId"}
          >
            <div className="is-flex box">
              <FormControlLabel
                label=""
                control={<Radio />}
              />
              <div className="expert-row">
                <div className="is-flex aic jcsb">
                  <div className="is-flex">
                    <div
                      className="expert-elipse"
                      style={{
                        marginRight: 65
                      }}
                    ></div>
                    <div>
                      <div
                        className="is-flex aic"
                        style={{ marginBottom: 20 }}
                      >
                        <a
                          style={{
                            fontSize: 24,
                            color: '#272aee',
                            fontWeight: 700,
                            marginRight: 15,
                          }}
                          href={`https://app.startupsgalaxy.com/experts/`}
                          target="_blank"
                        >
                        </a>
                        <img
                          src="https://static.startupsgalaxy.com/images/veriftick.svg"
                          style={{ height: 21 }}
                        />
                      </div>
                      <div
                        className="is-flex aic"
                        style={{ marginBottom: 15 }}
                      >
                        <img
                          src="https://static.startupsgalaxy.com/images/clap.svg"
                          style={{ height: 15, marginRight: 6 }}
                        />
                        <p
                          style={{
                            fontSize: 14,
                            color: '#585858',
                            marginRight: 9,
                            fontWeight: 400,
                          }}
                        >
                        </p>
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: "red",
                            marginRight: 7
                          }}
                        />
                        <p
                          style={{
                            fontSize: 14,
                            color: '#585858',
                            fontWeight: 400,
                          }}
                        >
                        </p>
                      </div>
                      <div className="is-flex aic">
                        <img
                          src="https://static.startupsgalaxy.com/images/locpin.svg"
                          style={{ height: 15, marginRight: 6 }}
                        />
                        <p
                          style={{
                            fontSize: 12,
                            color: '#585858',
                            fontWeight: 700,
                          }}
                        >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'box',
                      flexWrap: 'wrap',
                      maxWidth: '35%',
                    }}
                  >
                    <div
                      className="expertise-tag"
                      style={{ float: 'left', marginRight: 5 }}
                    >
                    </div>
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: '#05063E',
                        marginBottom: 4,
                      }}
                    >
                    </h2>
                    <p
                      className="has-text-centered"
                      style={{ fontSize: 14, color: '#000', fontWeight: 700 }}
                    >
                      HOUR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RadioGroup>
          <div className="is-flex aic jce" style={{ marginBottom: 75 }}>
            <button
              className={`mx-auto button is-primary`}
            >
              Proceed to project
            </button>
          </div>



          <Grid item lg={4} md={4} sm={4} xs={4} style={{
                        width: "89px",
                        height: "20px",
                        marginLeft: "138px",
                        marginTop: "154px",

                        background: "rgba(39, 42, 238, 0.22)",
                        borderRadius: "4px"
                    }}>
                        <label style={{
                            position: "relative",
                            marginLeft: "30px",
                            width: "27px",
                            height: "17px",
                            top: "-2px",

                            fontFamily: "Lato",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "17px",
                            /* identical to box height */

                        }}>
                            SEO
                        </label>
                    </Grid>


        </Grid>
        {/* <Grid item lg={3}>
          <div style={{ padding: 30, backgroundColor: "#FFF", borderRadius: 8, width: 350, height: 350, border: "solid 1px #e8e8e8", position: "fixed", top: 300, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <h4 style={{ fontSize: 22, fontWeight: 700, color: "#585858", marginBottom: 30 }}>Summary</h4>
            <div>
              <div className="is-flex aic jcsb mb-4">
                <p style={{ fontSize: 14 }}>1 Expert x 1 {`Consultancy Call`}</p>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#585858" }}>Hello</h4>
              </div>
              <div className="is-flex aic jcsb mb-4">
                <p style={{ fontSize: 14 }}>TAX</p>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#585858" }}>to the very</h4>
              </div>
              <hr className="mb-4" />
              <div className="is-flex aic jcsb mb-4">
                <p style={{ fontSize: 14 }}>Total</p>
                <h4 style={{ fontSize: 24, fontWeight: 700, color: "#585858" }}>bad world</h4>
              </div>
            </div>
            <div className="is-flex aic jcc">
              <button className={`button is-primary`}>Proceed to project</button>
            </div>
          </div>
        </Grid> */}
      </Grid>
    </Container>




  );
}
