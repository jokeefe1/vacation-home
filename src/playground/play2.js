
// let data = ​​​​​[
//     {
//         gender: 'male',
//         name: { title: 'mr', first: 'wyatt', last: 'fisher' },
//         location:
//         {
//             street: '6687 green rd',
//             city: 'murfreesboro',
//             state: 'new jersey',
//             postcode: 66852,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'wyatt.fisher@example.com',
//         login:
//         {
//             uuid: 'f39a599a-63d7-407a-a9f4-4cc56a863bd0',
//             username: 'yellowfish366',
//             password: 'mian',
//             salt: 'Am3CdDOj',
//             md5: '8f3719ee00c1713599871370d3e06f8a',
//             sha1: '5f587006a73e1dcc91a370e1721aa5e5089990a7',
//             sha256: '738b9530f9e337372fcca558adad0ae2605a284086fa21aa778ac26e16bbe528'
//         },
//         dob: { date: '1985-10-26T15:23:44Z', age: 32 },
//         registered: { date: '2014-10-01T18:18:58Z', age: 3 },
//         phone: '(465)-317-8078',
//         cell: '(909)-095-0990',
//         id: { name: 'SSN', value: '708-25-9320' },
//         picture:
//         {
//             large: 'https://randomuser.me/api/portraits/men/34.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/men/34.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg'
//         },
//         nat: 'US'
//     },
//     {
//         gender: 'female',
//         name: { title: 'miss', first: 'jessica', last: 'ellis' },
//         location:
//         {
//             street: '2127 grafton street',
//             city: 'dungarvan',
//             state: 'dún laoghaire–rathdown',
//             postcode: 60840,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'jessica.ellis@example.com',
//         login:
//         {
//             uuid: 'f1f1e80e-f0b0-4c48-a640-9e7331335491',
//             username: 'sadlion547',
//             password: 'boobie',
//             salt: 'fV5t55bO',
//             md5: 'c5151b7d7d08bf9f47ec11ba219a27b4',
//             sha1: 'f817105723b890c7824ff8106e6e09b59f802c98',
//             sha256: '76a957a1453f035ef61c81775c1007fcea3dd32a8b7861c9551e14ed9a4f3fff'
//         },
//         dob: { date: '1949-03-02T23:59:31Z', age: 69 },
//         registered: { date: '2014-12-10T16:31:00Z', age: 3 },
//         phone: '011-858-5274',
//         cell: '081-474-6489',
//         id: { name: 'PPS', value: '1898634T' },
//         picture:
//         {
//             large: 'https://randomuser.me/api/portraits/women/78.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg'
//         },
//         nat: 'IE'
//     },
//     {
//         gender: 'female',
//         name: { title: 'ms', first: 'adina', last: 'lutter' },
//         location:
//         {
//             street: 'mozartstraße 138',
//             city: 'soltau',
//             state: 'niedersachsen',
//             postcode: 25816,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'adina.lutter@example.com',
//         login:
//         {
//             uuid: '4ee0a2b8-71cc-41d8-984c-67b7a7df2ded',
//             username: 'happycat384',
//             password: 'shuo',
//             salt: 'gXYQPjUU',
//             md5: 'd1bbc24348454bdd86eb8b882bc66ae5',
//             sha1: 'd3aa51366749f5c0b57d75c6790f2c7aa76599af',
//             sha256: '300070566d78811393f76708e23e646005c480e56e0c79c0d9a6a1f2d734fd64'
//         },
//         dob: { date: '1966-03-22T18:45:11Z', age: 52 },
//         registered: { date: '2005-11-09T08:53:33Z', age: 12 },
//         phone: '0694-8070646',
//         cell: '0172-6857467',
//         id: { name: '', value: null },
//         picture:
//         {
//             large: 'https://randomuser.me/api/portraits/women/25.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/25.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
//         },
//         nat: 'DE'
//     }
// ]


// let gender = data.reduce( (all, item)  => {
//     return all[gender].push(item)
// }, { male: [], female: [] })

// console.log(gender)


const repeat = (num) => {
    let star = '*'
    let count = 0
    while(count < num) {
        console.log(star)
        count++
    }
}
repeat(10)