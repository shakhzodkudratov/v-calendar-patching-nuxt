import Vue from 'vue';
import VCalendar from 'v-calendar/src/lib';

Vue.use(VCalendar, {
  componentPrefix: 'vc',
  locales: {
    kz: {
      translations: {
        dayNames: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
        dayNamesShort: [
          'Жек', 'Дүй',
          'Сей', 'Сәр',
          'Бей', 'Жұм',
          'Сен'
        ],
        dayNamesShorter: [
          'Же', 'Дү',
          'Се', 'Сә',
          'Бе', 'Жұ',
          'Се'
        ],
        dayNamesNarrow: [
          'Ж', 'Д', 'С',
          'С', 'Б', 'Ж',
          'С'
        ],
        monthNames: ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
        monthNamesShort: [
          'Қаң', 'Ақп', 'Нау',
          'Сәу', 'Мам', 'Мау',
          'Шіл', 'Там', 'Қыр',
          'Қаз', 'Қар', 'Жел'
        ]
      }
    }
  }
})
