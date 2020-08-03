<template>
  <crud
    :prefix="prefix"
    :path="path"
    :paths="paths"
    :page-title="pageTitle"
    :fields-info="fieldsInfo"
    :details-title="$t('detailsTitle')"
  >
  </crud>
</template>

<script>
import Crud from '@/utils/crud/components/Crud.vue'
import FieldsInfoMixin from './mixins/fields'
import LocalesMixin from './mixins/locales'

export default {
  mixins: [
    FieldsInfoMixin,
    LocalesMixin,
  ],
  data () {
    return {
      prefix: 'contribution',
      path: 'people_contributions',
      paths: {
        i: 'contribution/people_contributions',
        st: 'contribution/people_contributions',
        u: 'contribution/people_contributions',
      },
      pageTitle: 'contribution.personsContributions',
    }
  },
  components: {
    Crud,
  },
}

</script>
