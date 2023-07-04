<template lang="">
  <h2
    class="text-amber-300 pt-6 mt-20 text-4xl font-bold text-center no-underline"
  >
    Projects
  </h2>

  <!--  projects div -->
  <div class="md:container md:mx-auto px-14 lg:px-14 py-8 items-center">
    <div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-0.5">
      <div class="w-full row-span-2">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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
      <div class="w-full col-span-2 row-span-2">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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
      <div class="w-full">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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
      <div class="w-full">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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
      <div class="w-full col-span-2 row-span-2">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1586921829167-409624a3734a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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

      <div class="w-full col-span-2">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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
      <div class="w-full">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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
      <div class="w-full">
        <!-- modal start -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn h-full w-full"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            src="https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Photo by Claudio Schwarz on Unsplash"
            class="inset-0 h-full w-full object-cover object-center rounded-sm opacity-90 hover:opacity-100"
          />
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
                    The thermal sensitivity of a sprinkler measures how quickly
                    the thermal element operates. Perhaps the most common way of
                    measuring thermal sensitivity is the response time index
                    (RTI). Sprinklers are then categorized into fast or standard
                    response based on their RTI. The RTI is typically determined
                    by conducting a plunge test in which a sprinkler is placed
                    (plunged) into a heated laminar airflow within a test oven.
                    Then, the operating time of the sprinkler, the operating
                    temperature of the sprinkler’s heat-responsive element, the
                    air temperature of the test oven, the air velocity of the
                    test oven, and the sprinkler’s conductivity factor are used
                    to calculate the RTI. Additional factors impact the response
                    such as the temperature rating of the sprinkler, sprinkler
                    position, fire exposure, and radiation. The response time is
                    expressed as a response time index (RTI), which typically
                    has values between 35 m ½ s ½ and 250 m ½ s ½ , where a low
                    value indicates a fast response.
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
                    Source: NFPA 13, Standard for the Installation of Sprinkler
                    Systems, Edition 2022
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
  </div>

  <!-- end projects div -->
</template>
<style scoped>
button {
  margin: 0%;
  padding: 0%;
}
</style>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import sourceData from "@src/data/data.json";
import { useHead } from "unhead";

export default {
  name: "Projects",
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
  setup() {
    useHead({
      title: "Projects | Aydid Hasan",
      meta: [
        {
          name: "title",
          content: "Projects | Aydid Hasan",
        },
        {
          name: "description",
          content: "Projects Page of Aydid Hasan's Portfolio.",
        },
        {
          property: "og:description",
          content: "Projects Page of Aydid Hasan's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
