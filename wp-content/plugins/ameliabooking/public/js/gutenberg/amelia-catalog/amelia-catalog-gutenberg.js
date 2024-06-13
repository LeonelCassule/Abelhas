(function (wp) {

  var el = wp.element.createElement
  var components = wp.components
  var blockControls = wp.editor.BlockControls
  var inspectorControls = wp.editor.InspectorControls
  var data = wpAmeliaLabels.data

  var categories = []
  var services = []
  var employees = []
  var locations = []
  var packages = []

  var blockStyle = {
    color: 'red'
  }

  if (data.categories.length !== 0) {
    for (let i = 0; i < data.categories.length; i++) {
      categories.push({
        value: data.categories[i].id,
        text: data.categories[i].name + ' (id: ' + data.categories[i].id + ')'
      })
    }
  } else {
    categories = []
  }

  if (data.servicesList.length !== 0) {
    // Create array of services objects
    for (let i = 0; i < data.servicesList.length; i++) {
      if (data.servicesList[i].length !== 0) {
        services.push({
          value: data.servicesList[i].id,
          text: data.servicesList[i].name + ' (id: ' + data.servicesList[i].id + ')'
        })
      }
    }
  } else {
    services = []
  }

  if (data.employees.length !== 0) {
    // Create array of employees objects
    for (let i = 0; i < data.employees.length; i++) {
      employees.push({
        value: data.employees[i].id,
        text: data.employees[i].firstName + ' ' + data.employees[i].lastName + ' (id: ' + data.employees[i].id + ')'
      })
    }
  } else {
    employees = []
  }

  if (data.locations.length !== 0) {
    // Create array of locations objects
    for (let i = 0; i < data.locations.length; i++) {
      locations.push({
        value: data.locations[i].id,
        text: data.locations[i].name + ' (id: ' + data.locations[i].id + ')'
      })
    }
  } else {
    locations = []
  }

  if (data.packages.length !== 0) {
    // Create array of packages objects
    for (let i = 0; i < data.packages.length; i++) {
      packages.push({
        value: data.packages[i].id,
        text: data.packages[i].name + ' (id: ' + data.packages[i].id + ')'
      })
    }
  } else {
    packages = []
  }

  // Registering the Block for catalog shortcode
  wp.blocks.registerBlockType('amelia/catalog-gutenberg-block', {
    title: wpAmeliaLabels.catalog_gutenberg_block.title,
    description: el('div', {class: 'amelia-gutenberg-desc'}, wpAmeliaLabels.catalog_gutenberg_block.description,
      el('div', {class: 'amelia-gutenberg-outdated'}, wpAmeliaLabels.outdated_booking_gutenberg_block)
    ),
    icon: el('svg', {width: '59', height: '27', viewBox: '0 0 59 27', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: 'amelia-booking-gutenberg-outdated'},
      el('g', {clipPath: 'url(#clip0_4557_119)'},
        el('path', {
          d: 'M11.5035 10.8582V2.03134C11.5035 0.469951 9.84273 -0.505952 8.51417 0.274788L0.996444 4.69241C0.379839 5.05468 0 5.72434 0 6.44897V15.2339C0 16.7916 1.65361 17.768 2.98218 16.9947L10.5 12.6191C11.1206 12.2578 11.5035 11.5859 11.5035 10.8582Z',
          fill: '#1A84EE'
        }),
        el('path', {
          d: 'M13.4965 2.03138V10.8583C13.4965 11.5859 13.8795 12.2578 14.5 12.619L22.0179 16.9947C23.3465 17.768 25.0001 16.7917 25.0001 15.2339V6.449C25.0001 5.72438 24.6203 5.05472 24.0037 4.69245L16.4859 0.274738C15.1573 -0.505914 13.4965 0.46999 13.4965 2.03138Z',
          fill: '#005AEE'
        }),
        el('path', {
          d: 'M11.5107 14.3675L3.94998 18.7682C2.61505 19.5451 2.61112 21.5029 3.94283 22.2855L11.5035 26.7284C12.1201 27.0907 12.8798 27.0907 13.4964 26.7284L21.0572 22.2855C22.3889 21.5029 22.385 19.5451 21.0501 18.7682L13.4894 14.3675C12.8763 14.0106 12.1236 14.0106 11.5107 14.3675Z',
          fill: '#3BA6FF'
        }),
        el('rect', {x: '20', width: '39', height: '12', rx: '6', fill: '#FDF3F2'}),
        el('path', {
          d: 'M28.1133 5.5V5.8125C28.1133 6.24219 28.0573 6.6276 27.9453 6.96875C27.8333 7.3099 27.6732 7.60026 27.4648 7.83984C27.2591 8.07943 27.0117 8.26302 26.7227 8.39062C26.4336 8.51562 26.1133 8.57812 25.7617 8.57812C25.4128 8.57812 25.0938 8.51562 24.8047 8.39062C24.5182 8.26302 24.2695 8.07943 24.0586 7.83984C23.8477 7.60026 23.6836 7.3099 23.5664 6.96875C23.4518 6.6276 23.3945 6.24219 23.3945 5.8125V5.5C23.3945 5.07031 23.4518 4.6862 23.5664 4.34766C23.681 4.00651 23.8424 3.71615 24.0508 3.47656C24.2617 3.23438 24.5104 3.05078 24.7969 2.92578C25.0859 2.79818 25.4049 2.73438 25.7539 2.73438C26.1055 2.73438 26.4258 2.79818 26.7148 2.92578C27.0039 3.05078 27.2526 3.23438 27.4609 3.47656C27.6693 3.71615 27.8294 4.00651 27.9414 4.34766C28.056 4.6862 28.1133 5.07031 28.1133 5.5ZM27.1328 5.8125V5.49219C27.1328 5.17448 27.1016 4.89453 27.0391 4.65234C26.9792 4.40755 26.8893 4.20312 26.7695 4.03906C26.6523 3.8724 26.5078 3.7474 26.3359 3.66406C26.1641 3.57812 25.9701 3.53516 25.7539 3.53516C25.5378 3.53516 25.3451 3.57812 25.1758 3.66406C25.0065 3.7474 24.862 3.8724 24.7422 4.03906C24.625 4.20312 24.5352 4.40755 24.4727 4.65234C24.4102 4.89453 24.3789 5.17448 24.3789 5.49219V5.8125C24.3789 6.13021 24.4102 6.41146 24.4727 6.65625C24.5352 6.90104 24.6263 7.10807 24.7461 7.27734C24.8685 7.44401 25.0143 7.57031 25.1836 7.65625C25.3529 7.73958 25.5456 7.78125 25.7617 7.78125C25.9805 7.78125 26.1745 7.73958 26.3438 7.65625C26.513 7.57031 26.6562 7.44401 26.7734 7.27734C26.8906 7.10807 26.9792 6.90104 27.0391 6.65625C27.1016 6.41146 27.1328 6.13021 27.1328 5.8125ZM31.543 7.50391V4.27344H32.4883V8.5H31.5977L31.543 7.50391ZM31.6758 6.625L31.9922 6.61719C31.9922 6.90104 31.9609 7.16276 31.8984 7.40234C31.8359 7.63932 31.7396 7.84635 31.6094 8.02344C31.4792 8.19792 31.3125 8.33464 31.1094 8.43359C30.9062 8.52995 30.6628 8.57812 30.3789 8.57812C30.1732 8.57812 29.9844 8.54818 29.8125 8.48828C29.6406 8.42839 29.4922 8.33594 29.3672 8.21094C29.2448 8.08594 29.1497 7.92318 29.082 7.72266C29.0143 7.52214 28.9805 7.28255 28.9805 7.00391V4.27344H29.9219V7.01172C29.9219 7.16536 29.9401 7.29427 29.9766 7.39844C30.013 7.5 30.0625 7.58203 30.125 7.64453C30.1875 7.70703 30.2604 7.7513 30.3438 7.77734C30.4271 7.80339 30.5156 7.81641 30.6094 7.81641C30.8776 7.81641 31.0885 7.76432 31.2422 7.66016C31.3984 7.55339 31.5091 7.41016 31.5742 7.23047C31.6419 7.05078 31.6758 6.84896 31.6758 6.625ZM35.3906 4.27344V4.96094H33.0078V4.27344H35.3906ZM33.6953 3.23828H34.6367V7.33203C34.6367 7.46224 34.6549 7.5625 34.6914 7.63281C34.7305 7.70052 34.7839 7.74609 34.8516 7.76953C34.9193 7.79297 34.9987 7.80469 35.0898 7.80469C35.1549 7.80469 35.2174 7.80078 35.2773 7.79297C35.3372 7.78516 35.3854 7.77734 35.4219 7.76953L35.4258 8.48828C35.3477 8.51172 35.2565 8.53255 35.1523 8.55078C35.0508 8.56901 34.9336 8.57812 34.8008 8.57812C34.5846 8.57812 34.3932 8.54036 34.2266 8.46484C34.0599 8.38672 33.9297 8.26042 33.8359 8.08594C33.7422 7.91146 33.6953 7.67969 33.6953 7.39062V3.23828ZM38.6953 7.625V2.5H39.6406V8.5H38.7852L38.6953 7.625ZM35.9453 6.43359V6.35156C35.9453 6.03125 35.9831 5.73958 36.0586 5.47656C36.1341 5.21094 36.2435 4.98307 36.3867 4.79297C36.5299 4.60026 36.7044 4.45312 36.9102 4.35156C37.1159 4.2474 37.3477 4.19531 37.6055 4.19531C37.8607 4.19531 38.0846 4.24479 38.2773 4.34375C38.4701 4.44271 38.6341 4.58464 38.7695 4.76953C38.9049 4.95182 39.013 5.17057 39.0938 5.42578C39.1745 5.67839 39.2318 5.95964 39.2656 6.26953V6.53125C39.2318 6.83333 39.1745 7.10938 39.0938 7.35938C39.013 7.60938 38.9049 7.82552 38.7695 8.00781C38.6341 8.1901 38.4688 8.33073 38.2734 8.42969C38.0807 8.52865 37.8555 8.57812 37.5977 8.57812C37.3424 8.57812 37.112 8.52474 36.9062 8.41797C36.7031 8.3112 36.5299 8.16146 36.3867 7.96875C36.2435 7.77604 36.1341 7.54948 36.0586 7.28906C35.9831 7.02604 35.9453 6.74089 35.9453 6.43359ZM36.8867 6.35156V6.43359C36.8867 6.6263 36.9036 6.80599 36.9375 6.97266C36.974 7.13932 37.0299 7.28646 37.1055 7.41406C37.181 7.53906 37.2786 7.63802 37.3984 7.71094C37.5208 7.78125 37.6667 7.81641 37.8359 7.81641C38.0495 7.81641 38.2253 7.76953 38.3633 7.67578C38.5013 7.58203 38.6094 7.45573 38.6875 7.29688C38.7682 7.13542 38.8229 6.95573 38.8516 6.75781V6.05078C38.8359 5.89714 38.8034 5.75391 38.7539 5.62109C38.707 5.48828 38.6432 5.3724 38.5625 5.27344C38.4818 5.17188 38.3815 5.09375 38.2617 5.03906C38.1445 4.98177 38.0052 4.95312 37.8438 4.95312C37.6719 4.95312 37.526 4.98958 37.4062 5.0625C37.2865 5.13542 37.1875 5.23568 37.1094 5.36328C37.0339 5.49089 36.9779 5.63932 36.9414 5.80859C36.9049 5.97786 36.8867 6.15885 36.8867 6.35156ZM43.0078 7.65234V5.63672C43.0078 5.48568 42.9805 5.35547 42.9258 5.24609C42.8711 5.13672 42.7878 5.05208 42.6758 4.99219C42.5664 4.93229 42.4284 4.90234 42.2617 4.90234C42.1081 4.90234 41.9753 4.92839 41.8633 4.98047C41.7513 5.03255 41.6641 5.10286 41.6016 5.19141C41.5391 5.27995 41.5078 5.38021 41.5078 5.49219H40.5703C40.5703 5.32552 40.6107 5.16406 40.6914 5.00781C40.7721 4.85156 40.8893 4.71224 41.043 4.58984C41.1966 4.46745 41.3802 4.37109 41.5938 4.30078C41.8073 4.23047 42.0469 4.19531 42.3125 4.19531C42.6302 4.19531 42.9115 4.2487 43.1562 4.35547C43.4036 4.46224 43.5977 4.6237 43.7383 4.83984C43.8815 5.05339 43.9531 5.32161 43.9531 5.64453V7.52344C43.9531 7.71615 43.9661 7.88932 43.9922 8.04297C44.0208 8.19401 44.0612 8.32552 44.1133 8.4375V8.5H43.1484C43.1042 8.39844 43.069 8.26953 43.043 8.11328C43.0195 7.95443 43.0078 7.80078 43.0078 7.65234ZM43.1445 5.92969L43.1523 6.51172H42.4766C42.3021 6.51172 42.1484 6.52865 42.0156 6.5625C41.8828 6.59375 41.7721 6.64062 41.6836 6.70312C41.5951 6.76562 41.5286 6.84115 41.4844 6.92969C41.4401 7.01823 41.418 7.11849 41.418 7.23047C41.418 7.34245 41.444 7.44531 41.4961 7.53906C41.5482 7.63021 41.6237 7.70182 41.7227 7.75391C41.8242 7.80599 41.9466 7.83203 42.0898 7.83203C42.2826 7.83203 42.4505 7.79297 42.5938 7.71484C42.7396 7.63411 42.8542 7.53646 42.9375 7.42188C43.0208 7.30469 43.0651 7.19401 43.0703 7.08984L43.375 7.50781C43.3438 7.61458 43.2904 7.72917 43.2148 7.85156C43.1393 7.97396 43.0404 8.09115 42.918 8.20312C42.7982 8.3125 42.6536 8.40234 42.4844 8.47266C42.3177 8.54297 42.125 8.57812 41.9062 8.57812C41.6302 8.57812 41.3841 8.52344 41.168 8.41406C40.9518 8.30208 40.7826 8.15234 40.6602 7.96484C40.5378 7.77474 40.4766 7.5599 40.4766 7.32031C40.4766 7.09635 40.5182 6.89844 40.6016 6.72656C40.6875 6.55208 40.8125 6.40625 40.9766 6.28906C41.1432 6.17188 41.3464 6.08333 41.5859 6.02344C41.8255 5.96094 42.099 5.92969 42.4062 5.92969H43.1445ZM46.875 4.27344V4.96094H44.4922V4.27344H46.875ZM45.1797 3.23828H46.1211V7.33203C46.1211 7.46224 46.1393 7.5625 46.1758 7.63281C46.2148 7.70052 46.2682 7.74609 46.3359 7.76953C46.4036 7.79297 46.4831 7.80469 46.5742 7.80469C46.6393 7.80469 46.7018 7.80078 46.7617 7.79297C46.8216 7.78516 46.8698 7.77734 46.9062 7.76953L46.9102 8.48828C46.832 8.51172 46.7409 8.53255 46.6367 8.55078C46.5352 8.56901 46.418 8.57812 46.2852 8.57812C46.069 8.57812 45.8776 8.54036 45.7109 8.46484C45.5443 8.38672 45.4141 8.26042 45.3203 8.08594C45.2266 7.91146 45.1797 7.67969 45.1797 7.39062V3.23828ZM49.4648 8.57812C49.1523 8.57812 48.8698 8.52734 48.6172 8.42578C48.3672 8.32161 48.1536 8.17708 47.9766 7.99219C47.8021 7.80729 47.668 7.58984 47.5742 7.33984C47.4805 7.08984 47.4336 6.82031 47.4336 6.53125V6.375C47.4336 6.04427 47.4818 5.74479 47.5781 5.47656C47.6745 5.20833 47.8086 4.97917 47.9805 4.78906C48.1523 4.59635 48.3555 4.44922 48.5898 4.34766C48.8242 4.24609 49.0781 4.19531 49.3516 4.19531C49.6536 4.19531 49.918 4.24609 50.1445 4.34766C50.3711 4.44922 50.5586 4.59245 50.707 4.77734C50.8581 4.95964 50.9701 5.17708 51.043 5.42969C51.1185 5.68229 51.1562 5.96094 51.1562 6.26562V6.66797H47.8906V5.99219H50.2266V5.91797C50.2214 5.7487 50.1875 5.58984 50.125 5.44141C50.0651 5.29297 49.9727 5.17318 49.8477 5.08203C49.7227 4.99089 49.556 4.94531 49.3477 4.94531C49.1914 4.94531 49.0521 4.97917 48.9297 5.04688C48.8099 5.11198 48.7096 5.20703 48.6289 5.33203C48.5482 5.45703 48.4857 5.60807 48.4414 5.78516C48.3997 5.95964 48.3789 6.15625 48.3789 6.375V6.53125C48.3789 6.71615 48.4036 6.88802 48.4531 7.04688C48.5052 7.20312 48.5807 7.33984 48.6797 7.45703C48.7786 7.57422 48.8984 7.66667 49.0391 7.73438C49.1797 7.79948 49.3398 7.83203 49.5195 7.83203C49.7461 7.83203 49.9479 7.78646 50.125 7.69531C50.3021 7.60417 50.4557 7.47526 50.5859 7.30859L51.082 7.78906C50.9909 7.92188 50.8724 8.04948 50.7266 8.17188C50.5807 8.29167 50.4023 8.38932 50.1914 8.46484C49.9831 8.54036 49.7409 8.57812 49.4648 8.57812ZM54.4688 7.625V2.5H55.4141V8.5H54.5586L54.4688 7.625ZM51.7188 6.43359V6.35156C51.7188 6.03125 51.7565 5.73958 51.832 5.47656C51.9076 5.21094 52.0169 4.98307 52.1602 4.79297C52.3034 4.60026 52.4779 4.45312 52.6836 4.35156C52.8893 4.2474 53.1211 4.19531 53.3789 4.19531C53.6341 4.19531 53.8581 4.24479 54.0508 4.34375C54.2435 4.44271 54.4076 4.58464 54.543 4.76953C54.6784 4.95182 54.7865 5.17057 54.8672 5.42578C54.9479 5.67839 55.0052 5.95964 55.0391 6.26953V6.53125C55.0052 6.83333 54.9479 7.10938 54.8672 7.35938C54.7865 7.60938 54.6784 7.82552 54.543 8.00781C54.4076 8.1901 54.2422 8.33073 54.0469 8.42969C53.8542 8.52865 53.6289 8.57812 53.3711 8.57812C53.1159 8.57812 52.8854 8.52474 52.6797 8.41797C52.4766 8.3112 52.3034 8.16146 52.1602 7.96875C52.0169 7.77604 51.9076 7.54948 51.832 7.28906C51.7565 7.02604 51.7188 6.74089 51.7188 6.43359ZM52.6602 6.35156V6.43359C52.6602 6.6263 52.6771 6.80599 52.7109 6.97266C52.7474 7.13932 52.8034 7.28646 52.8789 7.41406C52.9544 7.53906 53.0521 7.63802 53.1719 7.71094C53.2943 7.78125 53.4401 7.81641 53.6094 7.81641C53.8229 7.81641 53.9987 7.76953 54.1367 7.67578C54.2747 7.58203 54.3828 7.45573 54.4609 7.29688C54.5417 7.13542 54.5964 6.95573 54.625 6.75781V6.05078C54.6094 5.89714 54.5768 5.75391 54.5273 5.62109C54.4805 5.48828 54.4167 5.3724 54.3359 5.27344C54.2552 5.17188 54.1549 5.09375 54.0352 5.03906C53.918 4.98177 53.7786 4.95312 53.6172 4.95312C53.4453 4.95312 53.2995 4.98958 53.1797 5.0625C53.0599 5.13542 52.9609 5.23568 52.8828 5.36328C52.8073 5.49089 52.7513 5.63932 52.7148 5.80859C52.6784 5.97786 52.6602 6.15885 52.6602 6.35156Z',
          fill: '#E3463C'
        })
      ),
      el('defs', {},
        el('clipPath', {id: 'clip0_4557_119'},
          el('rect', {width: '59', height: '27', fill: 'white'})
        )
      )
    ),
    category: 'amelia-blocks',
    keywords: [
      'amelia',
      'catalog'
    ],
    supports: {
      customClassName: false,
      html: false
    },
    attributes: {
      short_code: {
        type: 'string',
        default: '[ameliacatalog]'
      },
      trigger: {
        type: 'string',
        default: ''
      },
      show: {
        type: 'string',
        default: ''
      },
      location: {
        type: 'string',
        default: ''
      },
      package: {
        type: 'string',
        default: ''
      },
      category: {
        type: 'string',
        default: ''
      },
      categoryOptions: {
        type: 'string',
        default: ''
      },
      service: {
        type: 'string',
        default: ''
      },
      employee: {
        type: 'string',
        default: ''
      },
      parametars: {
        type: 'boolean',
        default: false
      }
    },
    edit: function (props) {
      var inspectorElements = [],
        attributes = props.attributes,
        options = []

      options['categoryOptions'] = [
        {value: '', label: wpAmeliaLabels.show_catalog},
        {value: 'categories', label: wpAmeliaLabels.show_category},
        {value: 'services', label: wpAmeliaLabels.show_service}
      ]

      if (packages.length) {
        options['categoryOptions'].push({value: 'packages', label: wpAmeliaLabels.show_package})
      }

      options['categories'] = []
      options['services'] = []
      options['packages'] = []
      options['employees'] = [{value: '', label: wpAmeliaLabels.show_all_employees}]
      options['locations'] = [{value: '', label: wpAmeliaLabels.show_all_locations}]
      options['show'] = [{value: '', label: wpAmeliaLabels.show_all}, {value: 'services', label: wpAmeliaLabels.services}, {value: 'packages', label: wpAmeliaLabels.packages}]

      function getOptions(data) {
        var options = []
        data = Object.keys(data).map(function (key) {
          return data[key]
        })

        data.sort(function (a, b) {
          if (parseInt(a.value) < parseInt(b.value))
            return -1
          if (parseInt(a.value) > parseInt(b.value))
            return 1
          return 0
        })

        data.forEach(function (element) {
          options.push({value: element.value, label: element.text})
        })

        return options
      }

      getOptions(packages)
        .forEach(function (element) {
          options['packages'].push(element)
        })

      getOptions(categories)
      .forEach(function (element) {
        options['categories'].push(element)
      })

      getOptions(services)
      .forEach(function (element) {
        options['services'].push(element)
      })

      getOptions(employees)
      .forEach(function (element) {
        options['employees'].push(element)
      })

      if (locations.length) {
        getOptions(locations)
        .forEach(function (element) {
          options['locations'].push(element)
        })
      }

      function getShortCode(props, attributes) {
        var short_code_string = '', shortCode = ''

        if (categories.length !== 0 && services.length !== 0 && employees.length !== 0) {
          if (attributes.employee !== '') {
            short_code_string += ' employee=' + attributes.employee + ''
          }

          if (attributes.location !== '') {
            short_code_string += ' location=' + attributes.location + ''
          }

          if (attributes.categoryOptions === 'categories') {
            shortCode += '[ameliacatalog category=' + attributes.category + short_code_string
          } else if (attributes.categoryOptions === 'services') {
            shortCode += '[ameliacatalog service=' + attributes.service + short_code_string
          } else if (attributes.categoryOptions === 'packages') {
            shortCode += '[ameliacatalog package=' + attributes.package + short_code_string
          } else {
            shortCode += '[ameliacatalog' + short_code_string
          }

          if (attributes.show && attributes.categoryOptions !== 'packages' && attributes.categoryOptions !== 'services') {
            shortCode += ' show=' + attributes.show + ''
          }

          if (attributes.trigger) {
            shortCode += ' trigger=' + attributes.trigger + ''
          }

          shortCode += ']'
        } else {
          shortCode = "Notice: Please create category, service and employee first."
        }

        props.setAttributes({short_code: shortCode})

        return shortCode
      }

      if (categories.length !== 0 && services.length !== 0 && employees.length !== 0) {
        inspectorElements.push(el(components.SelectControl, {
          id: 'amelia-js-select-category',
          label: wpAmeliaLabels.select_catalog_view,
          value: attributes.categoryOptions,
          options: options.categoryOptions,
          onChange: function (selectControl) {
            return props.setAttributes({categoryOptions: selectControl})
          }
        }))

        if (attributes.categoryOptions === 'categories') {

          if (attributes.category === '' || attributes.category === options.services[0].value) {
            attributes.category = options.categories[0].value
          }
          attributes.service = ""
          attributes.package = ""

          inspectorElements.push(el(components.SelectControl, {
            id: 'amelia-js-select-category',
            value: attributes.category,
            options: options.categories,
            onChange: function (selectControl) {
              return props.setAttributes({category: selectControl})
            }
          }))

        } else if (attributes.categoryOptions === 'services') {

          if (attributes.service === '' || attributes.service === options.services[0].value) {
            attributes.service = options.services[0].value
          }
          attributes.category = ''
          attributes.package = ''

          inspectorElements.push(el(components.SelectControl, {
            id: 'amelia-js-select-service',
            value: attributes.service,
            options: options.services,
            onChange: function (selectControl) {
              return props.setAttributes({service: selectControl})
            }
          }))
        } else if (attributes.categoryOptions === 'packages') {

          if (attributes.package === '' || attributes.package === options.packages[0].value) {
            attributes.package = options.packages[0].value
          }
          attributes.category = ''
          attributes.service = ''

          inspectorElements.push(el(components.SelectControl, {
            id: 'amelia-js-select-package',
            value: attributes.package,
            options: options.packages,
            onChange: function (selectControl) {
              return props.setAttributes({package: selectControl})
            }
          }))
        }

        inspectorElements.push(el('div', {style: {'margin-bottom': '1em'}}, ''))

        inspectorElements.push(el(components.PanelRow,
          {},
          el('label', {htmlFor: 'amelia-js-parametars'}, wpAmeliaLabels.filter),
          el(components.FormToggle, {
            id: 'amelia-js-parametars',
            checked: attributes.parametars,
            onChange: function () {
              return props.setAttributes({parametars: !props.attributes.parametars})
            },
          })
        ))

        inspectorElements.push(el('div', {style: {'margin-bottom': '1em'}}, ''))

        if (attributes.parametars) {

          inspectorElements.push(el(components.SelectControl, {
            id: 'amelia-js-select-employee',
            label: wpAmeliaLabels.select_employee,
            value: attributes.employee,
            options: options.employees,
            onChange: function (selectControl) {
              return props.setAttributes({employee: selectControl})
            }
          }))

          inspectorElements.push(el('div', {style: {'margin-bottom': '1em'}}, ''))

          if (locations.length) {
            inspectorElements.push(el(components.SelectControl, {
              id: 'amelia-js-select-location',
              label: wpAmeliaLabels.select_location,
              value: attributes.location,
              options: options.locations,
              onChange: function (selectControl) {
                return props.setAttributes({location: selectControl})
              }
            }))

            inspectorElements.push(el('div', {style: {'margin-bottom': '1em'}}, ''))
          }

          inspectorElements.push(el(components.TextControl, {
            id: 'amelia-js-trigger',
            label: wpAmeliaLabels.manually_loading,
            value: attributes.trigger,
            help: wpAmeliaLabels.manually_loading_description,
            onChange: function (TextControl) {
              return props.setAttributes({trigger: TextControl})
            }
          }))

          if (options.packages.length &&
            attributes.categoryOptions !== 'packages' &&
            attributes.categoryOptions !== 'services'
          ) {
            inspectorElements.push(el('div', {style: {'margin-bottom': '1em'}}, ''))

            inspectorElements.push(el(components.SelectControl, {
              id: 'amelia-js-select-type',
              label: wpAmeliaLabels.show_all,
              value: attributes.show,
              options: options.show,
              onChange: function (selectControl) {
                return props.setAttributes({show: selectControl})
              }
            }))
          }

        } else {
          attributes.employee = ''
          attributes.location = ''
        }

        return [
          el(blockControls, {key: 'controls'}),
          el(inspectorControls, {key: 'inspector'},
            el(components.PanelBody, {initialOpen: true},
              inspectorElements
            )
          ),
          el('div', {},
            getShortCode(props, props.attributes)
          )
        ]
      } else {
        inspectorElements.push(el('p', {style: {'margin-bottom': '1em'}}, 'Please create category, services and employee first. You can find instructions in our documentation on link below.'));
        inspectorElements.push(el('a', {href: 'https://wpamelia.com/quickstart/', target: '_blank', style: {'margin-bottom': '1em'}}, 'Start working with Amelia WordPress Appointment Booking plugin'));

        return [
          el(blockControls, {key: 'controls'}),
          el(inspectorControls, {key: 'inspector'},
            el(components.PanelBody, {initialOpen: true},
              inspectorElements
            )
          ),
          el('div',
            {style: blockStyle},
            getShortCode(props, props.attributes)
          )
        ]
      }

    },

    save: function (props) {
      return (
        el('div', {},
          props.attributes.short_code
        )
      )
    }
  })

})(
  window.wp
)
