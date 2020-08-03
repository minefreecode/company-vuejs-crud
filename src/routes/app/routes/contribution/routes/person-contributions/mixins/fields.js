export default {
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false,
        },
        {
          type: 'select',
          url: 'crm/people',
          list: {
            value: 'id',
            text: 'fullname',
            data: [],
          },
          column: 'people_id',
          text: this.$t('fields.person'),
          name: 'person',
          apiObject: {
            name: 'person.fullname',
          },
        },
        {
          type: 'input',
          column: 'title',
          text: this.$t('fields.title'),
          name: 'title',
          apiObject: {
            name: 'title',
            functions: ['croppedText'],
          },
          multiedit: false,
        },
        {
          type: 'textarea',
          column: 'description',
          text: this.$t('fields.description'),
          name: 'description',
          apiObject: {
            name: 'description',
            functions: ['croppedText'],
          },
          multiedit: false,
        },
      ]
    },
  },
}
