<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full  lg:ml-32 sm:max-w-3xl">
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <div class="flex justify-between my-4">
                  <h2 class="text-base font-semibold leading-6 p-2 text-gray-900" id="modal-title">
                    <b class="text-blue-900">Nuovo ordine</b>
                  </h2>
                </div>
                <hr class="mb-4" />
                <div class="mt-4">
                  <div class="mb-6">
                    <label for="orderNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero
                      d'ordine</label>
                    <input type="text" id="orderNumber"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="" required v-model="order_number" />
                  </div>
                  <div class="mb-6">
                    <label for="qta"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantità</label>
                    <input type="number" min="0" max="10000" step="1" id="qta"
                      class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required v-model="order_quantity" />
                  </div>
                  <div class="mb-6">
                    <label for="order_customization"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personalizzazione</label>
                    <input type="text" id="order_customization"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required v-model="order_customization" />
                  </div>
                  <div class="mb-6">
                    <label for="sn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serial
                      number</label>
                    <input type="text" id="sn"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required v-model="order_serialnumber" />
                  </div>
                  <div class="mb-6">
                    <label for="sn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data di
                      spedizione:</label>
                    <input type="date" id="shipping_date"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required v-model="shipping_date" />
                  </div>
                  <div class="mb-6">
                    <label for="procesNote" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note di
                      processo</label>
                    <textarea v-model="order_process_note"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="procesNote" id="procesNote" cols="30" rows="10"></textarea>
                  </div>
                  <hr>
                  <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button @click="sentData"
                      class="mt-3 inline-flex w-full justify-center mx-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-500 hover:text-white sm:mt-0 sm:w-auto">
                      Save
                    </button>
                    <button
                      class="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800 hover:text-white sm:mt-0 sm:w-auto"
                      @click="triggerCloseModal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { endpoints } from "../common/endpoints";
import { axios } from "../common/api.service";


const props = defineProps({
  board_id: {
    type: Number,
    required: false,
  },
  order: {
    type: Object,
    required: false,
  },
});
const order_number = ref("");
const order_quantity = ref("");
const order_process_note = ref("");
const order_serialnumber = ref("");
const order_customization = ref("");
const shipping_date = ref(null);


const emit = defineEmits(["close-modal", "save-data"]);


if (props.order) {

  order_number.value = props.order.order_number
  order_quantity.value = props.order.order_quantity
  order_process_note.value = props.order.order_process_note
  order_serialnumber.value = props.order.order_serialnumber
  order_customization.value = props.order.order_customization
  shipping_date.value = props.order.shipping_date
}


async function sentData() {
  let endpoint = endpoints["ordersCRUD"];
  let method = "POST";

  if (props.order) {
    endpoint += `${props.order.order_number}/`;
    method = "PATCH";
  }
  try {
    const response = await axios({
      method: method,
      url: endpoint,
      data: {
        order_number: order_number.value,
        order_quantity: order_quantity.value,
        order_process_note: order_process_note.value,
        order_serialnumber: order_serialnumber.value,
        order_customization: order_customization.value,
        shipping_date: shipping_date.value,
        board: props.board_id
      },
    });

    emit("save-data", response.data);
  } catch (error) {
    error = error;
    alert(error);
  }
}
function triggerCloseModal() {
  // emit an event to delete an answer instance
  emit("close-modal");
}
</script>
