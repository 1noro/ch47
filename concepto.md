# CH47 - Concepto

El Ch47 (Chat) es un proyecto libre bajo licencia GPL v3 (o posterior) de comonicación _P2P_ encriptada y descentralizada.

Básicamente consiste en un conjunto de pequeños programas que trabajarán en consonancia para sostener la red y permitir la comunicación entre usuarios.

Los componentes básicos de este proyecto se listarán a continuación.

## Cliente de chat (GUI)

Es la interfaz gráfica de usuario que, leyendo la lista de contactos, te permitirá comunicarte de forma encriptada con cualquiera de los usuarios registrados, así como editar tu propia lista de contactos para mantener la comunicación con quien desees de forma inmediata.

### Conversaciones

Sección de la interfaz gráfica dónde te comunicarás con los contactos que desees. Esta consta de las siguientes secciones o pantallas:

- __Lista de contactos__ con los que mantienes una conversación.
- Interfaz de la __conversación__ con cada uno de los contactos.

### Editor de contactos

Sección de la interfaz gráfica dónde podrás editar la lista de contactos a tu gusto para no tener que esperar a que se acctualize por si sola. Esta consta de las siguientes secciones o pantallas:

- __Lista de contactos__ que has editado (o agregado) tu mismo.
- Formulario de __edición de contactos__.

## Servidor de lista

Gestor automático de la lista de contactos que almacena (buscar la manera mas eficiente) una copia de los datos de conexión de todos los usuarios registrados en la aplicación.

### Datos almacenados en la lista

- __Nick__: nombre de usuario.
- __IP__: ip pública donde ese usuario tiene instalado su ch47.
- __Puerto__: puerto abierto en su ip pública dedicado al ch47.
- __Clave Pública__: clave con la que encriptar los mensajes que se enviarán a dicho contacto.

## Comprobador de IP

Pequeña utilidad que se dedica, a progresivamente comprobar el esrtado de los nodos de la red y de si su ip y su puerto continuan siendo los mismos que los registrados en la lista.