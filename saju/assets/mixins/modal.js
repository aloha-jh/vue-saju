import Modal from '~/components/modal/Modal.vue'

export default {
    components: {
        Modal,
    },
    data() {
        return {
            modal: {
                isOpen: false,
                type: '',
            },
        }
    },
    methods: {
        openModal(value) {
            this.modal.isOpen = true
            this.modal.type = value.type
        },
        closeModal() {
            this.modal.isOpen = false
            this.modal.type = ''
        },
    },
}
