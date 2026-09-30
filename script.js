const songs = [
    {
        title: "Kesariya",
        artist: "Arijit Singh",
        genre: "Bollywood",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        title: "295",
        artist: "Sidhu Moose Wala",
        genre: "Punjabi",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
    },
    {
        title: "Levels",
        artist: "Sidhu Moose Wala",
        genre: "Punjabi",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
    },
    {
        title: "Same Beef",
        artist: "Sidhu Moose Wala",
        genre: "Punjabi",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
    },
    {
        title: "So High",
        artist: "Sidhu Moose Wala",
        genre: "Punjabi",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
    },
    {
        title: "Barota",
        artist: "Sidhu Moose Wala",
        genre: "Punjabi",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"
    },
    {
        title: "0008",
        artist: "Sidhu Moose Wala",
        genre: "Punjabi",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3"
    },

    {
        title: "Russian Bandana",
        artist: "Dhanda Nyoliwala",
        genre: "Haryanvi",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3"
    },
    {
        title: "Up To U",
        artist: "Dhanda Nyoliwala",
        genre: "Haryanvi",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3"
    },
    {
        title: "Knife Brows",
        artist: "Dhanda Nyoliwala",
        genre: "Haryanvi",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3"
    },
    {
        title: "Tension",
        artist: "Dhanda Nyoliwala",
        genre: "Haryanvi",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3"
    },
    {
        title: "BLACK RIDE",
        artist: "Dhanda Nyoliwala",
        genre: "Haryanvi",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3"
    },
    {
        title: "Not Guilty",
        artist: "Dhanda Nyoliwala",
        genre: "Haryanvi",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3"
    },

    {
        title: "Shayad",
        artist: "Arijit Singh",
        genre: "Bollywood",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3"
    },
    {
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        genre: "Bollywood",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3"
    },
    {
        title: "Apna Bana Le",
        artist: "Arijit Singh",
        genre: "Bollywood",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3"
    },
    {
        title: "Agar Tum Saath Ho",
        artist: "Arijit Singh",
        genre: "Bollywood",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3"
    },
    {
        title: "Channa Mereya",
        artist: "Arijit Singh",
        genre: "Bollywood",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3"
    },
    {
        title: "Zaalima",
        artist: "Arijit Singh",
        genre: "Bollywood",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3"
    },

    {
        title: "Calm Down",
        artist: "Rema",
        genre: "Pop",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "People",
        artist: "Libianca",
        genre: "R&B",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Pop",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
        title: "Die For You",
        artist: "The Weeknd",
        genre: "R&B",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
        title: "Starboy",
        artist: "The Weeknd",
        genre: "Electronic",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romantic",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        genre: "Pop",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
    {
        title: "Stay",
        artist: "Justin Bieber",
        genre: "Pop",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    },
    {
        title: "Lovely",
        artist: "Billie Eilish",
        genre: "Chill",
        image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
    },
    {
        title: "Faded",
        artist: "Alan Walker",
        genre: "Electronic",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    }
];

const artists = [
    ["Arijit Singh","https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=85"],
    ["The Weeknd","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=85"],
    ["Ed Sheeran","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85"],
    ["Dua Lipa","https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=85"],
    ["Billie Eilish","https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=85"],
    ["Alan Walker","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=85"]
];

const albums = [
    ["Midnight Memories",songs[0]],
    ["After Hours",songs[3]],
    ["Future Nostalgia",songs[8]],
    ["Divide",songs[7]],
    ["World of Music",songs[2]],
    ["Chill Nights",songs[10]],
    ["Electronic Dreams",songs[11]],
    ["Summer Hits",songs[1]]
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

let currentIndex = 0;
let isPlaying = false;
let favorites = new Set();
let recent = [];

function createCard(song, index) {
    return `
        <article class="music-card" data-index="${index}">
            <div class="cover">
                <img src="${song.image}" alt="${song.title}">
                <button class="card-play" data-play="${index}">▶</button>
            </div>
            <div class="card-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        </article>
    `;
}

function renderMusicGrid(id, list = songs) {
    const element = document.getElementById(id);
    if (!element) return;

    element.innerHTML = list.map(song => {
        const index = songs.indexOf(song);
        return createCard(song,index);
    }).join("");
}

function renderAlbums() {
    document.getElementById("albumGrid").innerHTML = albums.map(album => `
        <div class="album-card">
            <div class="album-cover">
                <img src="${album[1].image}" alt="${album[0]}">
            </div>
            <h3>${album[0]}</h3>
            <p>${album[1].artist}</p>
        </div>
    `).join("");
}

function renderArtists() {
    document.getElementById("artistGrid").innerHTML = artists.map(artist => `
        <div class="artist-card">
            <img src="${artist[1]}" alt="${artist[0]}">
            <h3>${artist[0]}</h3>
            <p>Artist</p>
        </div>
    `).join("");
}

function renderFavorites() {
    const list = songs.filter((song,index) => favorites.has(index));
    const element = document.getElementById("favoriteGrid");

    if (!list.length) {
        element.innerHTML = `
            <div style="grid-column:1/-1;padding:80px;text-align:center;color:#68788d">
                <div style="font-size:45px">♡</div>
                <h2 style="margin:15px 0;color:white">No Favorites Yet</h2>
                <p>Tap the heart button while listening to save songs.</p>
            </div>
        `;
        return;
    }

    renderMusicGrid("favoriteGrid",list);
}

function renderRecent() {
    const list = recent.length
        ? recent.map(index => songs[index])
        : songs.slice(0,6);

    renderMusicGrid("recentGrid",list);
    renderMusicGrid("recentPageGrid",list);
}

function playSong(index) {
    currentIndex = Number(index);

    const song = songs[currentIndex];

    document.getElementById("playerCover").src = song.image;
    document.getElementById("playerTitle").textContent = song.title;
    document.getElementById("playerArtist").textContent = song.artist;

    document.getElementById("lyricsCover").src = song.image;
    document.getElementById("lyricsTitle").textContent = song.title;
    document.getElementById("lyricsArtist").textContent = song.artist;

    audio.src = song.audio;

    audio.play().then(() => {
        isPlaying = true;
        updatePlayButton();
    }).catch(() => {
        isPlaying = false;
        updatePlayButton();
    });

    recent = [currentIndex,...recent.filter(x => x !== currentIndex)].slice(0,8);
    renderRecent();
}

function updatePlayButton() {
    playBtn.textContent = isPlaying ? "Ⅱ" : "▶";
}

playBtn.addEventListener("click", () => {
    if (!audio.src) {
        playSong(currentIndex);
        return;
    }

    if (audio.paused) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }

    updatePlayButton();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(currentIndex);
});

document.getElementById("previous").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex);
});

document.getElementById("shuffle").addEventListener("click", () => {
    const random = Math.floor(Math.random() * songs.length);
    playSong(random);
    showToast("Playing random song");
});

document.getElementById("repeat").addEventListener("click", () => {
    audio.loop = !audio.loop;
    showToast(audio.loop ? "Repeat enabled" : "Repeat disabled");
});

audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    progress.value = (audio.currentTime / audio.duration) * 100;

    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", () => {
    if (!audio.loop) {
        currentIndex = (currentIndex + 1) % songs.length;
        playSong(currentIndex);
    }
});

progress.addEventListener("input", () => {
    if (!audio.duration) return;
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.volume = .8;

function formatTime(seconds) {
    if (!seconds || Number.isNaN(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2,"0")}`;
}

function showPage(page) {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.remove("active-page");
    });

    const target = document.getElementById(`page-${page}`);

    if (target) {
        target.classList.add("active-page");
    }

    document.querySelectorAll(".nav-item,.mobile-nav button").forEach(button => {
        button.classList.toggle("active",button.dataset.page === page);
    });

    document.querySelector(".sidebar")?.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("click", event => {

    const pageButton = event.target.closest("[data-page]");

    if (pageButton) {
        showPage(pageButton.dataset.page);
        return;
    }

    const playButton = event.target.closest("[data-play]");

    if (playButton) {
        playSong(playButton.dataset.play);
        return;
    }

    const card = event.target.closest(".music-card");

    if (card && !event.target.closest("button")) {
        playSong(card.dataset.index);
    }
});

document.getElementById("mobileMenu").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
});

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        document.getElementById("themeBtn").textContent = "☀";
    } else {
        document.getElementById("themeBtn").textContent = "☾";
    }
});

document.getElementById("favoritePlayer").addEventListener("click", () => {
    if (favorites.has(currentIndex)) {
        favorites.delete(currentIndex);
        document.getElementById("favoritePlayer").textContent = "♡";
        showToast("Removed from favorites");
    } else {
        favorites.add(currentIndex);
        document.getElementById("favoritePlayer").textContent = "♥";
        showToast("Added to favorites");
    }

    renderFavorites();
});

function searchSongs(value) {
    const query = value.toLowerCase().trim();

    const results = songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.genre.toLowerCase().includes(query)
    );

    document.getElementById("searchHeading").textContent =
        query ? `${results.length} Results` : "Popular Music";

    renderMusicGrid("searchGrid",results);
}

document.getElementById("searchInput").addEventListener("input",event => {
    showPage("search");
    document.getElementById("largeSearch").value = event.target.value;
    searchSongs(event.target.value);
});

document.getElementById("largeSearch").addEventListener("input",event => {
    searchSongs(event.target.value);
});

document.querySelectorAll(".genre-pills button").forEach(button => {
    button.addEventListener("click",() => {
        document.querySelectorAll(".genre-pills button").forEach(x => x.classList.remove("active"));
        button.classList.add("active");

        const genre = button.textContent.trim();

        if (genre === "All") {
            renderMusicGrid("exploreGrid",songs);
        } else {
            renderMusicGrid(
                "exploreGrid",
                songs.filter(song => song.genre.toLowerCase().includes(genre.toLowerCase()))
            );
        }
    });
});

document.querySelectorAll(".eq-presets button").forEach(button => {
    button.addEventListener("click",() => {
        document.querySelectorAll(".eq-presets button").forEach(x => x.classList.remove("active"));
        button.classList.add("active");

        const values = {
            Custom: [62,75,55,70,48],
            Pop: [50,65,72,85,75],
            Rock: [80,70,50,65,80],
            Jazz: [55,45,70,65,55],
            Bass: [95,90,70,45,35]
        };

        const preset = values[button.textContent.trim()];
        if (!preset) return;

        document.querySelectorAll(".eq-sliders input").forEach((input,index) => {
            input.value = preset[index];
        });
    });
});

document.getElementById("addPlaylist").addEventListener("click",() => {
    showToast("Create playlist feature ready");
});

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    },2200);
}

renderMusicGrid("trendingGrid",songs.slice(0,6));
renderMusicGrid("recentGrid",songs.slice(6,12));
renderMusicGrid("searchGrid",songs);
renderMusicGrid("exploreGrid",songs);
renderRecent();
renderFavorites();
renderAlbums();
renderArtists();

playSong(0);
audio.pause();
isPlaying = false;
updatePlayButton();