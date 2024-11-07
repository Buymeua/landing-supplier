const mainConfig = {
    showCustomer: true,
    showStores: true,
    title: 'Дропшипінг з Buyme: шлях до успішного бізнесу',
    description: 'Втілюйте свої мрії легко з нашою інноваційною платформою для дропшипінгу',
    button:{
        link:'/',
        text:'Для дропшиперів'
    },
    link:{
        href:'/providers',
        text:'Для постачальників'
    }
}
const providersConfig = {
    showCustomer: false,
    showStores: false,
    title: 'Дропшипінг з Buyme: для постачальників ',
    description: 'Втілюйте свої мрії легко з нашою інноваційною платформою для дропшипінгу',
    button:{
        href : 'https://suppliers.buymeua.shop/auth/signup',
        link:'/providers',
        text:'Зареєструватися'
    },
    link:{
        href:'about',
        text:'Дізнатися більше'
    }
}


export {mainConfig,providersConfig}