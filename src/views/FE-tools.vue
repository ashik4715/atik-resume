<template lang="">
  <div class="container sm:mx-auto mt-16 p-10">
    <form action="" class="form-detection">
      <div class="row text-light">
        <div class="col">
          <h1 class="text-white text-dark display-5 pt-4 no-underline">
            <strong>Sprinkler Response Time</strong>
          </h1>
          <p class="fst-italic py-3">
            Put desired value in the box or chose the pre-determined value by
            ticking one of the suggested options
          </p>

          <!-- RTI Row -->
          <div class="row pb-3">
            <div class="col-5">Response Time Index (RTI)</div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                type="text"
                id="numberField"
                name="RTI"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
              <h6 class="inline-flex ml-2 no-underline">
                &radic;m&lowast;&radic;s
              </h6>
            </div>
            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                !
              </button>
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        <strong>Response Time Index (RTI)</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      <div class="d-flex">
                        <p class="fs-6">
                          The thermal sensitivity of a sprinkler measures how
                          quickly the thermal element operates. Perhaps the most
                          common way of measuring thermal sensitivity is the
                          response time index (RTI). Sprinklers are then
                          categorized into fast or standard response based on
                          their RTI. The RTI is typically determined by
                          conducting a plunge test in which a sprinkler is
                          placed (plunged) into a heated laminar airflow within
                          a test oven. Then, the operating time of the
                          sprinkler, the operating temperature of the
                          sprinkler’s heat-responsive element, the air
                          temperature of the test oven, the air velocity of the
                          test oven, and the sprinkler’s conductivity factor are
                          used to calculate the RTI. Additional factors impact
                          the response such as the temperature rating of the
                          sprinkler, sprinkler position, fire exposure, and
                          radiation. The response time is expressed as a
                          response time index (RTI), which typically has values
                          between 35 m ½ s ½ and 250 m ½ s ½ , where a low value
                          indicates a fast response.
                        </p>
                      </div>
                      <div class="row text-center">
                        <div class="col">
                          <img
                            class="img-fluid mx-auto d-block"
                            src="../assets/img/sprinkler/RTI.png"
                            alt="equations"
                          />
                        </div>
                        <p>
                          Source: NFPA 13, Standard for the Installation of
                          Sprinkler Systems, Edition 2022
                        </p>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>

          <!-- Height Row -->
          <div class="row py-2">
            <div class="col-5">Height of Ceiling, H</div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                type="text"
                id="H"
                name="H"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
              <h6 class="inline-flex ml-2 no-underline">m</h6>
            </div>
            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                !
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="exampleModalLabel">
                        <strong>Ceiling Height</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      This is the height of the ceiling which is measured from
                      the floor level.
                      <div class="row text-center">
                        <div class="col">
                          <img
                            class="img-fluid mx-auto d-block"
                            src="../assets/img/sprinkler/Ceiling-Height.jpg"
                            alt="equations"
                          />
                        </div>
                        <p>
                          Figure adopted from Dr Ronald L. Alpert’s presentation
                          given on FIRESEAT 2011, Edinburgh, UK
                        </p>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>

          <!-- Radial Distance Row -->
          <div class="row py-3">
            <div class="col-5">Radial Distance, r</div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                type="text"
                id="R"
                name="R"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
              <h6 class="inline-flex ml-2 no-underline">m</h6>
            </div>
            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                !
              </button>
              <div
                class="modal fade"
                id="exampleModal2"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="exampleModalLabel2">
                        <strong>Radial Distance</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      This is the distance of the sprinkler from the center line
                      of the smoke plume.
                      <div class="row text-center">
                        <div class="col">
                          <img
                            class="img-fluid mx-auto d-block"
                            src="../assets/img/sprinkler/Radial-Distance.jpg"
                            alt="equations"
                          />
                        </div>
                        <p>
                          Figure adopted from Dr Ronald L. Alpert’s presentation
                          given on FIRESEAT 2011, Edinburgh, UK
                        </p>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>

          <!-- Aplha Row -->
          <div class="row py-3">
            <div class="col-5">Fire Growth Rate, &alpha;</div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                name="alpha"
                type="text"
                id="alpha"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
              <h6 class="inline-flex ml-2 no-underline">kW/s&sup2;</h6>
            </div>
            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                !
              </button>
              <div
                class="modal fade"
                id="exampleModal3"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampleModalLabel3"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="exampleModalLabel3">
                        <strong>Fire Growth Rate</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      <p>
                        The fire growth rate (alpha) is a term used in fire
                        engineering to describe the speed at which a fire
                        increases in size or intensity over time. It is a
                        measure of the rate of heat release from the fire,
                        typically expressed in units of kW/m².
                      </p>
                      <p>
                        The alpha factor depends on various factors such as the
                        fuel type, the ventilation conditions, and the geometry
                        of the enclosure where the fire is burning. The
                        following table has been adopted from BS 9999:2017
                        (Section 6.3)
                      </p>
                      <div class="row text-center">
                        <div class="col">
                          <img
                            class="img-fluid mx-auto d-block"
                            src="../assets/img/sprinkler/Fire-Growth-Rate.jpg"
                            alt="equations"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>

          <!-- Activation Temperature row -->
          <div class="row py-3">
            <div class="col-5">Activation Temperature, T<sub>act</sub></div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                name="tAmbient"
                type="text"
                id="tAmbient"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
              <h6 class="inline-flex ml-2 no-underline">&#8451;</h6>
            </div>
            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                !
              </button>
              <div
                class="modal fade"
                id="exampleModal4"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampleModalLabel4"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="exampleModalLabel4">
                        <strong>Sprinkler Activation Temperature</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      <p>
                        Looking closely at sprinklers with glass bulbs, it can
                        be noticed that there are different colour bulbs. The
                        colours identify the temperature rating of the sprinkler
                        or in other word, the temperature at which sprinkler
                        bulb activates and let the water flow. The temperature
                        rating of the sprinkler selected needs to consider the
                        maximum ambient ceiling temperature as well as the
                        occupancy classification. If the maximum ambient ceiling
                        temperature isn’t considered, it could result in
                        accidental sprinkler operation since sprinklers are
                        activated by heat. If the sprinkler does not have a
                        glass bulb, then the frame arm, deflector or coating
                        material will usually have some colour indicating the
                        temperature rating. A range of sprinkler head operating
                        temperature ratings is shown below.
                      </p>
                      <div class="text-center">
                        <img
                          class="img-fluid mx-auto d-block"
                          src="../assets/img/sprinkler/Bulbs-chart.png"
                          alt="equations"
                        />
                        <img
                          class="img-fluid mx-auto d-block"
                          src="../assets/img/sprinkler/Bulbs.png"
                          alt="equations"
                        />
                        <p>
                          Source:
                          <br />BAFSA Information File, Sprinkler Heads; Issue
                          1; BIF No 8C, May 2010 <br />NFPA 13, Standard for the
                          Installation of Sprinkler Systems, Edition 2022
                        </p>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>
          <!-- Ambience Temperature row -->
          <div class="row py-3">
            <div class="col-5">Ambience Temperature, T<sub>amb</sub></div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                name="tAct"
                type="text"
                id="tAct"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
              <h6 class="inline-flex ml-2 no-underline">&#8451;</h6>
            </div>

            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              >
                !
              </button>
              <div
                class="modal fade"
                id="exampleModal5"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampleModalLabel5"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="exampleModalLabel5">
                        <strong>Ambient Temperature</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      <p>
                        This is the room temperature at which the system
                        implicates the study. The widely used temperature is
                        used ranging from <strong>18°C to 20°C</strong> in cold
                        countries. However, this temperature can vary whether
                        increasing or decreasing based on system specification
                        or geographical locations.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>
          <!-- end Ambience Temperature row -->

          <!-- Total Time Steps Row -->
          <div class="row pb-3">
            <div class="col-5">Time Step</div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                type="text"
                id="timeStep"
                name="timeStep"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
            </div>
            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              >
                !
              </button>
              <div
                class="modal fade"
                id="exampleModal6"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampleModalLabel6"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="exampleModalLabel6">
                        <strong>Timestep</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      <p>
                        This is the increment of time in the solver.
                        <code>For example,</code> timestep = 1 means, the solver
                        will iterate the equation with an increment of one
                        second each time.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>

          <!-- Total Duration Row -->
          <div class="row pb-3">
            <div class="col-5">Total Duration</div>
            <div class="col-5">
              <input
                class="text-center text-slate-800"
                type="text"
                id="duration"
                name="duration"
                placeholder="Input value"
                style="border: 1px solid; border-radius: 1rem; max-width: 150px"
                required
              />
              <h6 class="inline-flex ml-2 no-underline">s</h6>
            </div>
            <div class="col">
              <!-- modal start -->
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark btn-circle bg-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
              >
                !
              </button>
              <div
                class="modal fade"
                id="exampleModal7"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampleModalLabel7"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header text-slate-800">
                      <h5 class="modal-title" id="exampleModalLabel7">
                        <strong>Duration of Fire</strong>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body text-slate-800">
                      <p>
                        This is the value which indicates the duration of the
                        fire that we want to simulate.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal end -->
            </div>
          </div>

          <div class="sprinkler-result rounded-2xl">
            <div class="row pt-3">
              <div class="col-5">
                <p class="px-5">Activation time</p>
                <p class="px-5">Fire Size</p>
              </div>
              <div class="col-5">
                <p class="result-style" id="activationTimeResult">s</p>
                <p class="result-style" id="fireSizeResult">kW</p>
              </div>
              <div class="col">
                <div class="time-section pb-1">
                  <!-- modal start -->
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal8"
                  >
                    !
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal8"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel8"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header text-slate-800">
                          <h5 class="modal-title" id="exampleModalLabel8">
                            <strong>Sprinkler Activation Time</strong>
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body text-slate-800">
                          <p>
                            The time at which sprinkler activates.
                            <code>For the simulation of the fire,</code> is the
                            point after which we can use the extinguishing
                            factor or reduction factor.
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- modal end -->
                </div>
                <div class="fire-section">
                  <!-- modal start -->
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal9"
                  >
                    !
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal9"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel9"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header text-slate-800">
                          <h5 class="modal-title" id="exampleModalLabel9">
                            <strong>Fire Size</strong>
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body text-slate-800">
                          <p>
                            The size of the fire at the time of sprinkler
                            activation. This value is particularly helpful to
                            estimate the maximum firesize in a compartment
                            before the sprinkler activates.
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- modal end -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Results -->
        <div class="col">
          <!--  accordion -->
          <div class="grid">
            <div class="bg-inherit py-10 shadow-sm rounded-xl space-y-2">
              <div
                class="transition text-stone-700 bg-white hover:bg-emerald-100 rounded-lg border-l-4 border-emerald-200"
              >
                <div
                  class="accordion-header rounded-lg font-normal cursor-pointer transition flex space-x-2 space-y-0.5 px-2 items-center h-16 bg-emerald-200 hover:bg-emerald-100"
                >
                  <i class="fas fa-plus"></i>
                  <h3 class="text-base no-underline">
                    Schematic of a Ceiling Jet Flow
                  </h3>
                </div>
                <div
                  class="accordion-content px-3 pt-0 overflow-hidden max-h-0 space-y-4 text-sm"
                >
                  <p class="text-sm pt-2">
                    Figure adopted from Dr Ronald L. Alpert’s presentation given
                    on FIRESEAT 2011, Edinburgh, UK.
                  </p>
                  <div class="p-2">
                    <img
                      class="img-fluid mx-auto d-block"
                      src="../assets/img/sprinkler/Ceiling-jet.jpg"
                      alt="equations"
                    />
                  </div>
                </div>
              </div>
              <div
                class="transition text-stone-700 bg-white hover:bg-emerald-100 rounded-lg border-l-4 border-emerald-200"
              >
                <div
                  class="accordion-header rounded-lg font-normal cursor-pointer transition flex space-x-2 space-y-0.5 px-2 items-center h-16 bg-emerald-200 hover:bg-emerald-100"
                >
                  <i class="fas fa-plus"></i>
                  <h3 class="text-base no-underline">Governing Equations</h3>
                </div>
                <div
                  class="accordion-content px-3 pt-0 overflow-hidden max-h-0 space-y-4 text-sm"
                >
                  <p class="text-sm pt-2">
                    The correlations for jet temperatures and velocities were
                    developed from data by R. L. Alpert
                  </p>
                  <div class="p-2">
                    <img
                      class="img-fluid mx-auto d-block"
                      src="../assets/img/sprinkler/Formulas.png"
                      alt="equations"
                    />
                  </div>
                </div>
              </div>
              <div
                class="transition text-stone-700 bg-white hover:bg-emerald-100 rounded-lg border-l-4 border-emerald-200"
              >
                <div
                  class="accordion-header rounded-lg font-normal cursor-pointer transition flex space-x-2 space-y-0.5 px-2 items-center h-16 bg-emerald-200 hover:bg-emerald-100"
                >
                  <i class="fas fa-plus"></i>
                  <h3 class="text-base no-underline">Visual Representation</h3>
                </div>
                <div
                  class="accordion-content px-3 pt-0 overflow-hidden max-h-0 space-y-4 text-sm"
                >
                  <div class="p-2">
                    <img
                      class="img-fluid mx-auto d-block"
                      src="../assets/img/sprinkler/Ceiling-Sprinkler.gif"
                      alt="equations"
                    />
                  </div>
                </div>
              </div>
              <div
                id="headingFour"
                class="transition text-stone-700 bg-white hover:bg-emerald-100 rounded-lg border-l-4 border-emerald-200"
              >
                <div
                  class="accordion-header rounded-lg font-normal cursor-pointer transition flex space-x-2 space-y-0.5 px-2 items-center h-16 bg-emerald-200 hover:bg-emerald-100"
                >
                  <i class="fas fa-plus"></i>
                  <h3 class="text-base no-underline">Graphical Data</h3>
                </div>
                <div
                  class="accordion-content px-3 pt-0 overflow-hidden max-h-600 space-y-2 text-sm"
                >
                  <div
                    class="line-chart"
                    id="myDiv3"
                    style="width: 100%; max-width: 600px"
                  ></div>
                  <p class="text-center text-danger py-52 max-h-600">
                    T<sub>gas</sub> vs Time
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- end accordion -->
        </div>
      </div>
      <div class="row py-2 pt-4">
        <div class="d-grid gap-2 col mx-auto" style="width: 250px">
          <button class="btn btn-calculate btn-lg" type="submit">
            Calculate
          </button>
          <button class="btn btn-clear btn-lg" type="button">Clear Data</button>
        </div>
        <div class="d-grid gap-2 col mx-auto" style="width: 250px">
          <button class="btn btn-print btn-lg" id="download" data="">
            Download CSV
          </button>
          <button class="btn btn-download btn-lg">Print Results</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
$(document).ready(function () {
  // check if #headingFour is open
  if ($("#headingFour .accordion-content").css("max-height") != "0px") {
    // close it
    $("#headingFour .accordion-content").css("max-height", "0px");
    $("#headingFour .accordion-header .fas")
      .addClass("fa-plus")
      .removeClass("fa-xmark");
  }

  const accordionHeaders = document.querySelectorAll(".accordion-header");
  let currentAccordion = null;

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionContent =
        header.parentElement.querySelector(".accordion-content");
      let accordionMaxHeight = accordionContent.style.maxHeight;

      if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
        // close the currently open accordion
        if (currentAccordion !== null && currentAccordion !== header) {
          const currentAccordionContent =
            currentAccordion.parentElement.querySelector(".accordion-content");
          currentAccordionContent.style.maxHeight = `0px`;
          currentAccordion.querySelector(".fas").classList.add("fa-plus");
          currentAccordion.querySelector(".fas").classList.remove("fa-xmark");
        }
        // open the clicked accordion and set it as the current accordion
        accordionContent.style.maxHeight = `${
          accordionContent.scrollHeight + 32
        }px`;
        header.querySelector(".fas").classList.remove("fa-plus");
        header.querySelector(".fas").classList.add("fa-xmark");
        currentAccordion = header;
      } else {
        // close the clicked accordion and remove it as the current accordion
        accordionContent.style.maxHeight = `0px`;
        header.querySelector(".fas").classList.add("fa-plus");
        header.querySelector(".fas").classList.remove("fa-xmark");
        currentAccordion = null;
      }
    });
  });

  $(".btn-outline-dark").click(function (e) {
    // var radioAlpha = $("input[name='flexRadioDefault']:checked").val();
    var radioAlpha = $(this).val();
    console.log(radioAlpha);
    e.preventDefault();
    if (radioAlpha) {
      document.querySelector("#alpha").value = radioAlpha;
    }
  });

  $("input.text-center").on("input", function () {
    this.value = this.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1");
  });
});

$(document).ready(function () {
  // define the arrays to store the values
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];
  var arr5 = [];
  var arr6 = [];

  var Vgas, Tgas, Q, tau, deltaT;
  var csv = "time,Q,Vgas,Tgas,Tbulb,deltaT\n";

  $(".btn-clear").click(function () {
    $("form")[0].reset();
  });
  $(".btn-calculate").click(function () {
    $("#myDiv3").empty();
    $(".line-chart").empty();
  });
  $("form").submit(function (event) {
    event.preventDefault(); // prevent default form submission

    var rti = parseFloat($("input[name='RTI']").val());
    var R = parseFloat($("input[name='R']").val());
    var H = parseFloat($("input[name='H']").val());
    var alphaVal = parseFloat($("input[name='alpha']").val());
    var radioAmbient = parseFloat($("input[name='tAmbient']").val());
    var radioAct = parseFloat($("input[name='tAct']").val());
    var timeStep = parseFloat($("input[name='timeStep']").val());
    var duration = parseFloat($("input[name='duration']").val());
    var Activation = radioAmbient + parseFloat(273);
    var Ambient = radioAct + parseFloat(273);
    var Tbulb = parseFloat(293);
    var TbulbCounter = 0;
    let TactivationTimePrint = 0;
    let FireSizeOfQ = 0;
    let PrintTgas = 0;

    function round(num, decimalPlaces = 0) {
      num = Math.round(num + "e" + decimalPlaces);
      return Number(num + "e" + -decimalPlaces);
    }

    // loop of result
    for (var i = 1; i <= duration; i++) {
      var preQ = alphaVal * parseFloat(i * i);
      Q = preQ;
      if (parseFloat(R / H) > parseFloat(0.15)) {
        Vgas =
          (0.2 * Math.pow(Q, 1 / 3) * Math.pow(H, 1 / 2)) / Math.pow(R, 5 / 6);
      }
      if (parseFloat(R / H) <= parseFloat(0.15)) {
        Vgas = 0.95 * Math.pow(Q / H, 1 / 3);
      }
      if (parseFloat(R / H) > parseFloat(0.18)) {
        var preTgas = (5.38 / H) * Math.pow(Q / R, 2 / 3);
        Tgas = preTgas + Ambient;
      }
      if (parseFloat(R / H) <= parseFloat(0.18)) {
        var preTgas = Math.pow(Q, 2 / 3) / Math.pow(H, 5 / 3);
        Tgas = Ambient + 16.9 * preTgas;
      }

      tau = rti / Math.sqrt(Vgas);
      deltaT = (1 / round(tau, 2)) * (Tgas - Ambient);
      Tbulb = Ambient + (Tgas - Tbulb) + deltaT;
      // var Tbulb = addConcurent(Ambient, round(deltaT, 2), Tbulb);
      TbulbCounter = Tbulb + parseFloat(round(deltaT, 2));
      if (TbulbCounter >= Activation) {
        TactivationTimePrint = i;
        FireSizeOfQ = preQ;
        PrintTgas = Tgas;
        break;
      }
      timeStep = round(parseFloat(timeStep) + 0.1, 2);
    }

    for (var i = 1; i <= duration; i++) {
      var preQ = alphaVal * parseFloat(i * i);
      Q = preQ;
      if (parseFloat(R / H) > parseFloat(0.15)) {
        Vgas =
          (0.2 * Math.pow(Q, 1 / 3) * Math.pow(H, 1 / 2)) / Math.pow(R, 5 / 6);
      }
      if (parseFloat(R / H) <= parseFloat(0.15)) {
        Vgas = 0.95 * Math.pow(Q / H, 1 / 3);
      }
      if (parseFloat(R / H) > parseFloat(0.18)) {
        var preTgas = (5.38 / H) * Math.pow(Q / R, 2 / 3);
        Tgas = preTgas + Ambient;
      }
      if (parseFloat(R / H) <= parseFloat(0.18)) {
        var preTgas = Math.pow(Q, 2 / 3) / Math.pow(H, 5 / 3);
        Tgas = Ambient + 16.9 * preTgas;
      }

      tau = rti / Math.sqrt(Vgas);
      deltaT = (1 / round(tau, 2)) * (Tgas - Ambient);
      Tbulb = Ambient + (Tgas - Tbulb) + deltaT;

      TbulbCounter = Tbulb + parseFloat(round(deltaT, 2));
      timeStep = round(parseFloat(timeStep) + 0.1, 2);
      arr1.push(i);
      arr2.push(Q);
      arr3.push(Vgas.toFixed(2));
      arr4.push(Tgas.toFixed(2));
      arr5.push(TbulbCounter.toFixed(2));
      arr6.push(deltaT.toFixed(2));
    }

    // export the arrays to CSV
    for (var i = 0; i < arr1.length; i++) {
      csv +=
        arr1[i] +
        "," +
        arr2[i] +
        "," +
        arr3[i] +
        "," +
        arr4[i] +
        "," +
        arr4[i] +
        "," +
        arr5[i] +
        "," +
        arr6[i] +
        "\n";
    }
    //Print Graph ChartJS
    // i,Q,Vgas,Tgas,TbulbCounter,deltaT
    $("#headingFour").click(function (event) {
      $("#myDiv3").empty();

      var trace1 = {
        x: [TactivationTimePrint.toFixed(0)],
        y: [PrintTgas.toFixed(2)],
        mode: "markers",
        marker: {
          size: 15,
          color: "red",
        },
        name: "point",
      };

      var trace3 = {
        x: arr1,
        y: arr4,
        mode: "lines+markers",
        marker: {
          color: "teal",
        },
        name: "line",
      };

      var data = [trace3, trace1];

      var layout = {
        title: "Line Chart For  Tgas Vs Activation Time",
        xaxis: {
          title: "Activation Time (s)",
        },
        yaxis: {
          title: "Tgas",
        },
        showlegend: true,
      };

      Plotly.newPlot("myDiv3", data, layout);
    });
    //Print Results
    console.log("Activation Time : ", TactivationTimePrint);
    $("#activationTimeResult").html(TactivationTimePrint.toFixed(0) + " s");
    console.log("Fire Size : ", FireSizeOfQ.toFixed(0));
    $("#fireSizeResult").html(FireSizeOfQ.toFixed(0) + " kW");
  });

  // handle data button click
  $("#download").click(function (event) {
    event.preventDefault();
    // create a temporary link element and click it to trigger download
    var link = document.createElement("a");
    link.setAttribute(
      "href",
      "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
    );
    link.setAttribute("download", "data.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
</script>
<style scoped>
body {
  font-family: "Trebuchet MS";
  background: #e6e6e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e6e6e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e6e6e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.accordion-content {
  transition: max-height 0.3s ease-out, padding 0.3s ease;
}

.accordion-button.collapsed {
  color: black;
  background: #cde9d9;
}
.accordion-button:not(.collapsed) {
  color: black;
  background: lightgreen;
}

.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 14px;
  line-height: 1.42857;
}

.col-sm {
  color: #595959 !important;
}

.text-light {
  background-color: inherit;
}

.sprinkler-result {
  border: 2px solid;
  background-color: #d1fae5;
  color: #000;
  padding: 10px 10px 10px 10px;
}

.activation-plot {
  background: whitesmoke; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    whitesmoke,
    #6cdff9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    whitesmoke,
    #6cdff9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.fire-plot {
  background: #def883; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #def883,
    whitesmoke
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #def883,
    whitesmoke
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn-calculate {
  --bs-btn-color: white;
  --bs-btn-bg: #a4a4a6;
  --bs-btn-border-color: #a4a4a6;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #d3d4d5;
  --bs-btn-hover-border-color: #e2e0da;
  --bs-btn-focus-shadow-rgb: 211, 212, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #e2e0da;
  --bs-btn-active-border-color: #babbbc;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #a4a4a6;
  --bs-btn-disabled-border-color: #a4a4a6;
}
.btn-clear,
.btn-print,
.btn-download {
  --bs-btn-color: white;
  --bs-btn-bg: #a4a4a6;
  --bs-btn-border-color: #a4a4a6;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #d3d4d5;
  --bs-btn-hover-border-color: #e2e0da;
  --bs-btn-focus-shadow-rgb: 211, 212, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #e2e0da;
  --bs-btn-active-border-color: #babbbc;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #a4a4a6;
  --bs-btn-disabled-border-color: #a4a4a6;
}
canvas {
  min-height: 320px;
  border: 1.5px black solid;
}

.result-style {
  text-align: center;
  border: 1px solid;
  color: #000;
  background-color: gold;
  border-radius: 1rem;
  max-width: 144px;
  margin-bottom: 20px;
}

/* Chart.js */
@-webkit-keyframes chartjs-render-animation {
  from {
    opacity: 0.99;
  }
  to {
    opacity: 1;
  }
}
@keyframes chartjs-render-animation {
  from {
    opacity: 0.99;
  }
  to {
    opacity: 1;
  }
}
.chartjs-render-monitor {
  -webkit-animation: chartjs-render-animation 0.001s;
  animation: chartjs-render-animation 0.001s;
}
/* end chat.js */

/* Media Query for Mobile Devices */
@media (max-width: 350px) {
  canvas,
  .line-chart {
    max-width: 20em;
  }
}

/* Media Query for low resolution  Tablets, Ipads */
@media (min-width: 361px) and (max-width: 425px) {
  canvas,
  .line-chart {
    max-width: 23em;
  }
}

@media (min-width: 425px) and (max-width: 767px) {
  canvas,
  .line-chart {
    max-width: 25em;
  }
}
/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1023px) {
  canvas,
  .line-chart {
    max-width: 45em !important;
  }
}

/* Media Query for Laptops and Desktops */
@media (min-width: 1024px) and (max-width: 1280px) {
  canvas,
  .line-chart {
    max-width: 60em !important;
  }
}

/* Media Query for Large screens */
@media (min-width: 1440px) and (max-width: 2560px) {
  canvas,
  .line-chart {
    max-width: 68em;
  }
}

.range-container {
  position: relative;
}

input[type="range"] {
  width: 180px;
  margin: 10px 0;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"] + label {
  background-color: black;
  position: absolute;
  top: -30px;
  left: 70px;
  width: 40px;
  padding: 5px 0;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

/* Chrome and Safari */

input[type="range"]::-webkit-slider-runnable-track {
  background: purple;
  border-radius: 4px;
  width: 100%;
  height: 10px;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 24px;
  width: 24px;
  background: white;
  border-radius: 50%;
  border: 1px solid purple;
  margin-top: -7px;
}

/* Firefox */
input[type="range"]::-moz-range-track {
  background: purple;
  border-radius: 4px;
  width: 100%;
  height: 10px;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  height: 24px;
  width: 24px;
  background: white;
  border-radius: 50%;
  border: 1px solid purple;
  margin-top: -7px;
}

/* IE */
input[type="range"]::-ms-track {
  background: purple;
  border-radius: 4px;
  width: 100%;
  height: 10px;
  cursor: pointer;
}

input[type="range"]::-ms-thumb {
  height: 24px;
  width: 24px;
  background: white;
  border-radius: 50%;
  border: 1px solid purple;
  margin-top: -7px;
}
</style>
