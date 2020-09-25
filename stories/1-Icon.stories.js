// base
import ArrowPointedDown from '../src/components/icons/ArrowPointedDown'
import ArrowPointedLeft from '../src/components/icons/ArrowPointedLeft'
import ArrowPointedRight from '../src/components/icons/ArrowPointedRight'
import ArrowPointedUp from '../src/components/icons/ArrowPointedUp'
import AudioIcon from '../src/components/icons/AudioIcon'
import BookmarkIcon from '../src/components/icons/BookmarkIcon'
import CheckmarkIcon from '../src/components/icons/CheckmarkIcon'
import CloseIcon from '../src/components/icons/CloseIcon'
import CommentIcon from '../src/components/icons/CommentIcon'
import DownloadIcon from '../src/components/icons/DownloadIcon'
import DropdownIcon from '../src/components/icons/DropdownIcon'
import EmailIcon from '../src/components/icons/EmailIcon'
import EmbedIcon from '../src/components/icons/EmbedIcon'
import FacebookIcon from '../src/components/icons/FacebookIcon'
import GalleryIcon from '../src/components/icons/GalleryIcon'
import HamburgerIcon from '../src/components/icons/HamburgerIcon'
import InstagramIcon from '../src/components/icons/InstagramIcon'
import NyprLogo from '../src/components/icons/NyprLogo'
import OpenInNewWindow from '../src/components/icons/OpenInNewWindow'
import PlaceholderIcon from '../src/components/icons/PlaceholderIcon'
import PlaySimple from '../src/components/icons/PlaySimple'
import PrintIcon from '../src/components/icons/PrintIcon'
import RedditIcon from '../src/components/icons/RedditIcon'
import RssIcon from '../src/components/icons/RssIcon'
import SearchIcon from '../src/components/icons/SearchIcon'
import SimpleArrowDown from '../src/components/icons/SimpleArrowDown'
import SimpleArrowLeft from '../src/components/icons/SimpleArrowLeft'
import SimpleArrowRight from '../src/components/icons/SimpleArrowRight'
import SimpleArrowUp from '../src/components/icons/SimpleArrowUp'
import SpotifyIcon from '../src/components/icons/SpotifyIcon'
import StylishArrow from '../src/components/icons/StylishArrow'
import TwitterIcon from '../src/components/icons/TwitterIcon'
import VideoIcon from '../src/components/icons/VideoIcon'
import VolumeIcon from '../src/components/icons/VolumeIcon'
import VolumeMuted from '../src/components/icons/VolumeMuted'
import YoutubeIcon from '../src/components/icons/YoutubeIcon'

// gothamist
import GothamistArrow from '../src/components/icons/gothamist/GothamistArrow'
import GothamistLogo from '../src/components/icons/gothamist/GothamistLogo'
import GothamistLogoStacked from '../src/components/icons/gothamist/GothamistLogoStacked'
import NycLove from '../src/components/icons/gothamist/NycLove'
import PartyConfetti from '../src/components/icons/gothamist/PartyConfetti'

// wqxr
import ListenerCount from '../src/components/icons/wqxr/ListenerCount'
import MusicNote from '../src/components/icons/wqxr/MusicNote'
import PauseIcon from '../src/components/icons/wqxr/PauseIcon'
import WqxrLogo from '../src/components/icons/wqxr/WqxrLogo'

// wync
import Jlgreene from '../src/components/icons/wnyc/jlgreene'
import WnycLogo from '../src/components/icons/wnyc/WnycLogo'

export default {
  title: 'Components/Atoms/Icons'
}

export const BaseIcons = () => ({
  components: {
    ArrowPointedDown,
    ArrowPointedLeft,
    ArrowPointedRight,
    ArrowPointedUp,
    AudioIcon,
    BookmarkIcon,
    CheckmarkIcon,
    CloseIcon,
    CommentIcon,
    DownloadIcon,
    DropdownIcon,
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    GalleryIcon,
    HamburgerIcon,
    InstagramIcon,
    NyprLogo,
    OpenInNewWindow,
    PlaySimple,
    PlaceholderIcon,
    PrintIcon,
    RedditIcon,
    RssIcon,
    SearchIcon,
    SimpleArrowRight,
    SimpleArrowUp,
    SimpleArrowLeft,
    SimpleArrowDown,
    SpotifyIcon,
    StylishArrow,
    TwitterIcon,
    VideoIcon,
    VolumeMuted,
    VolumeIcon,
    YoutubeIcon,
    Jlgreene,
    WnycLogo
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <div class="l-grid l-grid--4up">
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <arrow-pointed-down title="test title" />
            </span>
          <div>arrow pointed down</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <arrow-pointed-left title="test title" />
            </span>
          <div>arrow pointed left</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <arrow-pointed-right title="test title" />
            </span>
          <div>arrow pointed right</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <arrow-pointed-up title="test title" />
            </span>
          <div>arrow pointed up</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <audio-icon />
            </span>
          <div>audio</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <bookmark-icon />
            </span>
          <div>bookmark</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <checkmark-icon />
            </span>
          <div>checkmark</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <close-icon />
            </span>
          <div>close</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <comment-icon />
            </span>
          <div>comment</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <download-icon />
            </span>
          <div>download</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <dropdown-icon />
            </span>
          <div>dropdown</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <email-icon />
            </span>
          <div>email</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <embed-icon />
            </span>
          <div>embed</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <facebook-icon />
            </span>
          <div>facebook</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <gallery-icon />
            </span>
          <div>gallery</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <hamburger-icon />
            </span>
          <div>hamburger</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <instagram-icon />
            </span>
          <div>instagram</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <nypr-logo />
            </span>
          <div>nypr logo</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <open-in-new-window />
            </span>
          <div>open in new window</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <placeholder-icon />
            </span>
          <div>placeholder</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <play-simple />
            </span>
          <div>play (simple)</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <print-icon />
            </span>
          <div>print</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <reddit-icon />
            </span>
          <div>reddit</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <rss-icon />
            </span>
          <div>rss</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <search-icon />
            </span>
          <div>search</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <simple-arrow-down />
            </span>
          <div>simple arrow down</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <simple-arrow-left />
            </span>
          <div>simple arrow left</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <simple-arrow-right />
            </span>
          <div>simple arrow right</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <simple-arrow-up />
            </span>
          <div>simple arrow up</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <spotify-icon />
            </span>
          <div>spotify</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <stylish-arrow />
            </span>
          <div>stylish arrow</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <twitter-icon />
            </span>
          <div>twitter</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <video-icon />
            </span>
          <div>video</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <volume-icon />
            </span>
          <div>volume</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <volume-muted />
            </span>
          <div>volume muted</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--s u-space--right">
              <youtube-icon />
            </span>
          <div>youtube</div>
        </div>
      </div>
    </div>
    </div>`
})

export const GothamistIcons = () => ({
  components: {
    GothamistLogoStacked,
    GothamistLogo,
    GothamistArrow,
    NycLove,
    PartyConfetti
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <div class="l-grid l-grid--4up">
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <gothamist-arrow />
            </span>
          <div>gothamist arrow</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <gothamist-logo />
            </span>
          <div>gothamist logo</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <gothamist-logo-stacked />
            </span>
          <div>gothamist logo (stacked)</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <nyc-love />
            </span>
          <div>nyc love</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <party-confetti />
            </span>
          <div>party confetti</div>
        </div>
      </div>
    </div>
    </div>`
})

export const WnycIcons = () => ({
  components: {
    Jlgreene,
    WnycLogo
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <div class="l-grid l-grid--4up">
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <jlgreene title="test title" />
            </span>
          <div>jlgreene logo</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <wnyc-logo />
            </span>
          <div>wnyc logo</div>
        </div>
      </div>
    </div>
    </div>`
})

export const WqxrIcons = () => ({
  components: {
    ListenerCount,
    MusicNote,
    PauseIcon,
    WqxrLogo
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <div class="l-grid l-grid--4up">
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <listener-count />
            </span>
          <div>listener count</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <music-note />
            </span>
          <div>music notes</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <pause-icon />
            </span>
          <div>pause</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <wqxr-logo />
            </span>
          <div>wqxr logo</div>
        </div>
      </div>
    </div>
    </div>`
})
