const { addonBuilder } = require("stremio-addon-sdk");
const magnet = require("magnet-uri");

const manifest = { 
    "id": "org.elixirtv",
    "version": "1.0.0",

    "name": "Elixir TV",
    "description": "Peliculas en español latino",

    // set what type of resources we will return
    "resources": [
        "catalog",
        "stream"
    ],

    "types": ["movie", "series"], // your add-on will be preferred for those content types

    // set catalogs, we'll be making 2 catalogs in this case, 1 for movies and 1 for series
    "catalogs": [
        {
            type: 'movie',
            id: 'elixirmovies'
        },
        {
            type: 'series',
            id: 'elixirseries'
        }
    ],

    // prefix of item IDs (ie: "tt0032138")
    "idPrefixes": [ "tt" ]

};

const dataset = {
	
	 // el hombre araña no way home 
	//   "tt0133093": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:42PWY4QK2JJEEWXTL45ICVSLUWNYXJFC&dn=The%20Matrix%20(1999)%20FullHD&tr=http%3A%2F%2Ftracker.alt-torrent.com%2Fannounce.php"),
	
	// gato con botas
	   "tt3915174": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:VT3VWNOPHZOIMLEJIMK4JV5A7WY4OSR7&dn=Gato%20con%20Botas%20-%20El%20ultimo%20deseo%20(2022)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	
	// minions 2
	   "tt5113044": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:SJUFZCO7WOJDV2YNFTKKFKKW5LQWNAPB&dn=Minions%20nace%20un%20villano%20(2022)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	

	
		// lighyear
	   "tt10298810": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:5DC6M6WLBXRRS5U7SZBLKVJXTHBDH4PS&dn=Lightyear%20(2022)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	// elpeso del talento
	   "tt11291274": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:APKGWPSR7FJ2R246NC4AFUYPN5UJLK4H&dn=El%20Peso%20del%20Talento%20(2022)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	   
	
		 // ciudad perdida
	   "tt13320622": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:AKL3QVOVOTUADRIZ2HKBGHCKRUYY4VZY&dn=La%20ciudad%20perdida%20(2022)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	
			 // matrix 1 br
	   "tt0133093": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:NCCXKYQZDEXE2WKXDAJHCOOZ3HYMRGMT&dn=The.Matrix.(1999)&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce"),
	
	

	
			 // matrix 1 
	   "tt0133093": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:42PWY4QK2JJEEWXTL45ICVSLUWNYXJFC&dn=The%20Matrix%20(1999)%20FullHD&tr=http%3A%2F%2Ftracker.alt-torrent.com%2Fannounce.php"),
	
	
			 // matrix 2 
	   "tt0234215": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:OTK2RB2OVFKL772AOU3BZRG2RO72CAEZ&dn=The%20Matrix%20Reloaded%20(2003)%20FullHD&tr=http%3A%2F%2Ftracker.alt-torrent.com%2Fannounce.php"),
	
	
	
			 // matrix 3
	   "tt0242653": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:PVAQVWWT62KCJM6SDZV6QAOFUF3SH72C&dn=The%20Matrix%20Revolutions%20(2003)%20FullHD%201080p&tr=http%3A%2F%2Ftracker.alt-torrent.com%2Fannounce.php"),
	
	
	
		 // matrix 4 
	   "tt10838180": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:DLKDEGHUN24LV33HT54KVGJWP4YTVF2H&dn=Matrix%20Resurrections%20(2021)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	
	
	
		 // escape room 2 
	   "tt9844522": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:D5QQFQCJXGLFETTTNJ7MTF6PLGTRU5J4&dn=Escape%20Room%202%20-%20Mueres%20por%20salir%20(2021)%20BR-RIP%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	
	 // free guy  
	   "tt6264654": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:3423DENKCF3YMIBPSJER63RKMMRCSZA7&dn=Free%20Guy%20(2021)%20BR-RIP%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),

	
	
	 // el mesero
     "tt10886670": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:5G57OW3WGXAI3DW2C6OQ23CQC3H7D5CF&dn=El%20mesero%20(2021)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),


	
	//sapos
	    "tt0806938": { name: "Elixir TV", type: "movie", url: "https://lxr.mx/cansada_de_los_sapos.mkv" }, // HTTP stream
	
		      // un rescate
     "tt8049994": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:QHLFYNYAO6MEVMH2RNBCB2SNV76WX576&dn=Un%20Rescate%20de%20Huevitos%20(2021)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	
	      // paw àtrol
     "tt11832046": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:7UUNVSZPQAE2LZ6O5MQ5C5ZTLA3RUYMJ&dn=La%20patrulla%20canina%20-%20La%20pelicula%20(2021)%20BR-RIP%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	
	      // sapos
    // "tt0806938": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:NVEC7VAT5WC5YLIIQWOA36NOFCZJKXYP&dn=c4ns4d4.d3.b3s4r.s4p0s.dvdrip.mp4&xl=447048338&tr=http%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce"),
	
	       // misfits
     "tt4876134": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:QRCNIXEXEPQ6BXP3BNF7ASVN43GNSR6B&dn=Ladrones%20de%20Elite%20(2021)%20WEBDL%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	
		 // escuadron suicida
     "tt6334354": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:O4OYJNKKLQH3EF6ATL3EMAQ5SZ5ZMMH7&dn=El%20Escuadron%20Suicida%20(2021)%20WEBDL%201080p%20LAT%20-%20CharlX%20%5BWEBRip%20Ligero%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"),
     
	
	//Peter Rabbit 2
	"tt8376234": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:X3RGJUXLWSJKFIDO7LO64XGRGMNJWWOG&dn=Peter%20Rabbit%202%20-%20A%20la%20fuga%20(2021)%20BR-RIP%201080p%20LAT%20-%20CharlX&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"),
	
	
	//Midnight in the Switchgrass
	"tt11656220": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:QFPE6GS5IATYRDT2DZNBSB6CSR57E3ZC&dn=Midnight%20in%20the%20Switchgrass%20(2021)%20FullHD%201080p%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	// black widow
     "tt3480822": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:WDHBK6UYDPXNPAAARUZLQGVPZWRDAMVZ&dn=Viuda%20Negra%20(2021)%20WEBDL-DSNY%201080p%20LAT%20-%20CharlX%20%5BWEBRip%20Ligero%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"),

	// fast and furious 9
     "tt5433138": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:SIMIYJ5KQVATEGEMKJEYQWM2IJ7ANXPC&dn=Fast%20%20Furious%209%20(2021)%20WEBDL-AMZN%201080p%20LAT%20-%20CharlX%20%5BWEBRip%20Ligero%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"),

	
	// jefe en pañales 2
     "tt6932874": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:PK64IANW2TNC3VDXALF6XIAJPLDNN65Y&dn=El%20bebe%20jefazo%20-%20Negocios%20de%20familia%20(2021)%20WEBDL%201080p%20H.265%20LAT%20-%20ZeiZ&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce"),
	
	 // magnet space jam
    "tt3554046": fromMagnet("Elixir-TV", "movie", "magnet:?xt=urn:btih:T7BB5T5NPD7JJS6Q5OT2NKES4LZTUK3Z&dn=Space%20Jam%20-%20Nuevas%20Leyendas%20(2021)%20WEBDL%201080p%20LAT%20-%20CharlX%20%5BWEBRip%20Ligero%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"),
    
    	 // magnet jungle cruise
     "tt0870154": fromMagnet("Elixir TV", "movie", "magnet:?xt=urn:btih:KJAPRNV3O2JBFJFCZCXZAIB7F6IA2YRO&dn=Jungle%20Cruise%20(2021)%20WEBDL-DSNY%201080p%20LAT%20-%20CharlX%20%5BWEBRip%20Ligero%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"),
     
         	 

 //   "tt0460091:1:1": { name: "Elixir-TV", type: "series", "url": "https://drive.google.com/file/d/1p_ZJLx8iEfOVGu5pDAK948sX3Qwtzhfu/view?usp=sharing" }, // torrent for season 1, episode 1
   
	
	
    // fileIdx is the index of the file within the torrent ; if not passed, the largest file will be selected
   // "tt0032138": { name: "The Wizard of Oz", type: "movie", infoHash: "24c8802e2624e17d46cd555f364debd949f2c81e", fileIdx: 0 },
    //"tt0017136": { name: "Metropolis", type: "movie", infoHash: "dca926c0328bb54d209d82dc8a2f391617b47d7a", fileIdx: 1 },

    // night of the living dead, example from magnet
  //  "tt0063350": fromMagnet("Night of the Living Dead", "movie", "magnet:?xt=urn:btih:A7CFBB7840A8B67FD735AC73A373302D14A7CDC9&dn=night+of+the+living+dead+1968+remastered+bdrip+1080p+ita+eng+x265+nahom&tr=udp%3A%2F%2Ftracker.publicbt.com%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce"),
    
   // "tt0051744": { name: "House on Haunted Hill", type: "movie", infoHash: "9f86563ce2ed86bbfedd5d3e9f4e55aedd660960" },

   // "tt1254207": { name: "Big Buck Bunny", type: "movie", url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" }, // HTTP stream
  //  "tt0031051": { name: "The Arizona Kid", type: "movie", ytId: "m3BKVSpP80s" }, // YouTube stream

   // "tt0137523": { name: "Fight Club", type: "movie", externalUrl: "https://www.netflix.com/watch/26004747" }, // redirects to Netflix

    //"tt1748166:1:1": { name: "Pioneer One", type: "series", infoHash: "07a9de9750158471c3302e4e95edb1107f980fa6" }, // torrent for season 1, episode 1
};

// utility function to add from magnet
function fromMagnet(name, type, uri) {
    const parsed = magnet.decode(uri);
    const infoHash = parsed.infoHash.toLowerCase();
    const tags = [];
    if (uri.match(/720p/i)) tags.push("720p");
    if (uri.match(/1080p/i)) tags.push("1080p");
    return {
        name: name,
        type: type,
        infoHash: infoHash,
        sources: (parsed.announce || []).map(function(x) { return "tracker:"+x }).concat(["dht:"+infoHash]),
        tag: tags,
        title: tags[0], // show quality in the UI
    }
}

const builder = new addonBuilder(manifest);

// Streams handler
builder.defineStreamHandler(function(args) {
    if (dataset[args.id]) {
        return Promise.resolve({ streams: [dataset[args.id]] });
    } else {
        return Promise.resolve({ streams: [] });
    }
})

const METAHUB_URL = "https://images.metahub.space"

const generateMetaPreview = function(value, key) {
    // To provide basic meta for our movies for the catalog
    // we'll fetch the poster from Stremio's MetaHub
    // see https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/meta.md#meta-preview-object
    const imdbId = key.split(":")[0]
    return {
        id: imdbId,
        type: value.type,
        name: value.name,
        poster: METAHUB_URL+"/poster/medium/"+imdbId+"/img",
    }
}

builder.defineCatalogHandler(function(args, cb) {
    // filter the dataset object and only take the requested type
    const metas = Object.entries(dataset)
	.filter(([_, value]) => value.type === args.type)
	.map(([key, value]) => generateMetaPreview(value, key))

    return Promise.resolve({ metas: metas })
})

module.exports = builder.getInterface()
