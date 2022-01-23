const router = express.Router();
const createConsumerAir = require('../adapters/queue/consumerAir')




router.route('/',createConsumerAir())

module.exports = router

