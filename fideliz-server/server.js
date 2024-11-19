
const app = require("express");
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/fideliz', { useNewUrlParser: true, useUnifiedTopology: true });

// Importar rotas
const authRoutes = require('./routes/auth');
const clienteRoutes = require('./routes/clientes');
const restauranteRoutes = require('./routes/restaurantes');

app.use('/auth', authRoutes);
app.use('/clientes', clienteRoutes);
app.use('/restaurantes', restauranteRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
