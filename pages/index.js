import Link from "next/link"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Section from "@/components/section"
import { Arena, ArrowExternal } from "../components/svg"
import Post from "@/components/post"
import { Feature } from "../components/post"
import Project from "@/components/project"
import { MultiProject, ExternalProject } from "../components/project"
import Icon from "@/components/icon"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"

import leaf from "../public/images/index/leaf.png"
import startup from "../public/images/index/startup.png"
import gametrack from "../public/images/index/gametrack.png"
import suptho from "../public/images/index/suptho.png"
import stops from "../public/images/index/stops.png"
import family from "../public/images/index/family.png"
import flighty from "../public/images/index/flighty.png"
import xdesign from "../public/images/index/xdesign.png"
import neonnights from "../public/images/index/neonnights.png"
import emulsion from "../public/images/index/emulsion.png"
import copilot from "../public/images/index/copilot.png"
import mattericon from "../public/images/index/matter.png"
import diffraction from "../public/images/index/diffraction.png"
import onepw from "../public/images/index/onepw.png"
import replace from "../public/images/index/replace.png"
import linear from "../public/images/index/linear.png"
import readwise from "../public/images/index/readwise.png"
import ruby from "../public/images/index/ruby.png"
import obsidianpersonal from "../public/images/index/obsidianpersonal.png"
import holo from "../public/images/index/holo.png"
import zoom from "../public/images/index/zoom.png"
import vscode from "../public/images/index/vscode.png"
import things from "../public/images/index/things.png"
import g1 from "../public/images/index/g1.png"
import obsidian from "../public/images/index/obsidian.png"
import craft from "../public/images/index/craft.png"
import camo from "../public/images/index/camo.png"
import reflect from "../public/images/index/reflect.png"
import stocketa from "../public/images/index/stocketa.png"
import apollo from "../public/images/index/apollo.png"
import xcode from "../public/images/index/xcode.png"
import claquette from "../public/images/index/claquette.png"
import slack from "../public/images/index/slack.png"
import hyperspace from "../public/images/index/hyperspace.png"
import earlybird from "../public/images/index/earlybird.png"

const IndexPage = ({ posts }) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )

  return (
    <>
      <Layout>
        <SEO />
        <div className="grid max-w-full gap-16 auto-rows-auto">
          <div>
            <p className="mt-8 md:mt-4">
              I'm currently shaping the mobile apps at GitHub and crafting app
              icons for a wide variety of clients. I focus on a high level of craftsmanship to create seamless experiences that solve problems. <br></br><br></br> If you'd like to
              see my portfolio or work with me on an icon, please{" "}
              <a
                className="text-tertiary dark:text-darkTertiary"
                href="mailto:gavin@nelson.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                get in touch
              </a>
              .
            </p>
          </div>
          <Section title="Connect">
            <div className="flex flex-row self-stretch justify-between sm:justify-start ">
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="mailto:gavin@nelson.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://twitter.com/Gavmn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://www.threads.net/@gavinmnelson"
                target="_blank"
                rel="noopener noreferrer"
              >
                Threads
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://mastodon.design/@gn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mastodon
              </a>
              {/* <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://github.com/gavinmn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a> */}
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://dribbble.com/Gavin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
              {/* <Arena /> */}
            </div>
          </Section>
          {/* <Section title="Notes" className="flex flex-row">
            <Link
              href="/notes"
              className=" text-tertiary dark:text-darkTertiary group"
              target="_blank"
              rel="noopener noreferrer"
              legacyBehavior
            >
              Explore
            </Link>
            <ArrowExternal />
          </Section> */}
          <Section title="Work">
          <div className="mb-2">
            <Feature
              title={"Copilot Chat for GitHub Mobile"}
              date={"Coming soon"}
              href={
                "https://github.blog/2023-11-08-universe-2023-copilot-transforms-github-into-the-ai-powered-developer-platform/"
              }
            />
          </div>
            <div className="mb-2">
              <Feature
                title={"Code Search for GitHub Mobile"}
                date={"Oct 2023"}
                href={
                  "https://github.blog/changelog/2023-10-10-navigate-code-on-the-go/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"Mobile code editing and pull requests"}
                date={"Mar 2023"}
                href={
                  "https://github.blog/2023-03-07-file-editing-on-github-mobile-keeps-leveling-up/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"Achievements on GitHub Mobile"}
                date={"Jan 2023"}
                href={
                  "https://github.blog/changelog/2023-01-10-achievements-on-github-mobile/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"GitHub Activity Feed"}
                date={"Jun 2022"}
                href={
                  "https://github.blog/changelog/2022-06-21-browse-the-activity-feed-on-github-mobile/"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"GitHub Navigation Shortcuts"}
                date={"Jan 2022"}
                href={"https://twitter.com/github/status/1481732836751204354"}
              />
            </div>
          </Section>
          <Section title="Features">
          <div className="mb-2">
            <Feature
              title={"App Icon Book"}
              date={"Coming soon"}
              href={"https://www.appiconbook.com"}
            />
          </div>
          <div className="mb-2">
            <Feature
              title={"Workspaces #341"}
              date={"Aug 2023"}
              href={"https://www.workspaces.xyz/p/341-gavin-nelson"}
            />
          </div>
            <div className="mb-2">
              <Feature
                title={"Interview with Gavin Nelson, product and icon designer"}
                date={"Mar 2023"}
                href={
                  "https://manual.withcompound.com/chapters/interview-with-gavin-nelson-product-and-icon-designer"
                }
              />
            </div>
            <div className="mb-2">
              <Feature
                title={
                  "Made with Sketch: How Gavin Nelson puts the icon in iconic"
                }
                date={"May 2022"}
                href={"https://www.sketch.com/blog/gavin-nelson-icon-design/"}
              />
            </div>
            <div className="mb-2">
              <Feature
                title={"Workspaces #136"}
                date={"Mar 2022"}
                href={"https://www.workspaces.xyz/p/136-gavin-nelson"}
              />
            </div>
          </Section>
          <Section title="Posts">
            {orderedPosts.map((post, key) => {
              return (
                <div className="mb-2">
                  <Post
                    key={key}
                    title={post.data.title}
                    date={post.data.date}
                    href={`${post.filePath.replace(/\.mdx?$/, "")}`}
                  />
                </div>
              )
            })}
          </Section>

          <Section title="Projects">
            <div className="mb-4">
              <Project
                link="/highlights"
                title="Highlights"
                description="A feed of passages I’ve highlighted from articles across the web"
              />
            </div>
            <div className="mb-4">
            <Project
              link="/musicthread/heavy-rotation"
              title="Heavy Rotation"
              description="A collection of what I've been listening to recently"
            /> 
            </div>
            <ExternalProject
              link="https://gumroad.com/l/dvctd"
              title="Monterey"
              description="A macOS and iOS icon theme"
            />
          </Section>
          <Section title="Select Icons">
            <p className="mb-4 text-tertiary dark:text-darkTertiary">
              For behind the scenes process posts,{" "}
              <a
                className="text-tertiary dark:text-darkTertiary"
                href="https://twitter.com/Gavmn"
                target="_blank"
                rel="noopener noreferrer"
              >
                follow along on Twitter
              </a>
              .
            </p>
            
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="max-w-full sm:col-span-2">
            <Icon
              src={family}
              title="Family Wallet"
              subtitle="Family"
              width="800"
              link="https://family.co"
            />
            </div>
            <Icon
              src={onepw}
              title="1Password"
              subtitle="1Password"
              width="800"
              link="https://apps.apple.com/us/app/1password-8-password-manager/id1511601750"
            />
            <Icon
              src={linear}
              title="Linear"
              subtitle="Linear"
              width="800"
              link="https://linear.app"
            />
            <div className="max-w-full sm:col-span-2">
            <Icon
              src={startup}
              title="Startup"
              subtitle="Jordan Singer"
              width="800"
              link="https://usestartup.com"
            />
            </div>
            <Icon
              src={stops}
              title="Stops"
              subtitle="Eff Corp"
              width="800"
              link="https://apps.apple.com/us/app/stops/id1663636345"
            />
            <Icon
              src={suptho}
              title="Suptho"
              subtitle="Suptho"
              width="800"
              link="https://www.suptho.co"
            />
            <div className="max-w-full sm:col-span-2">
              <Icon
                src={xdesign}
                title="Xdesign"
                subtitle="Diagram"
                width="800"
                link="https://diagram.com/"
              />
            </div>
            <Icon
              src={gametrack}
              title="Gametrack"
              subtitle="Gametraack"
              width="800"
              link="https://gametrack.app"
            />
            <Icon
              src={leaf}
              title="Leaf"
              subtitle="GitHub"
              width="800"
              link="https://github.com/mobile"
            />
          
              <div className="max-w-full sm:col-span-2">
                <Icon
                  src={flighty}
                  title="Nighty"
                  subtitle="Flighty"
                  width="800"
                  link="https://www.flightyapp.com/"
                />
              </div>
              
              
              <div className="max-w-full sm:col-span-2">
                <Icon
                  src={neonnights}
                  title="Neon Nights"
                  subtitle="GitHub"
                  width="800"
                  link="https://github.com/mobile"
                />
              </div>
              <Icon
                src={emulsion}
                title="Emulsion"
                subtitle="Eff Corp"
                width="800"
                link="https://eff.co/"
              />
              <Icon
                src={copilot}
                title="Copilot macOS"
                subtitle="Copilot"
                width="800"
                link="https://copilot.money/"
              />
              <Icon
                src={mattericon}
                title="Matter"
                subtitle="Matter"
                width="800"
                link="https://getmatter.app/"
              />

              <Icon
                src={diffraction}
                title="Diffraction"
                subtitle="GitHub"
                width="800"
                link="https://github.com/mobile"
              />

              <div className="max-w-full sm:col-span-2">
                <Icon
                  src={replace}
                  title="Replace"
                  subtitle="GitHub"
                  width="800"
                  link="https://github.com/mobile"
                />
              </div>
              <Icon
                src={readwise}
                title="Readwise"
                subtitle="Readwise"
                link="http://readwise.io"
              />
              <Icon
                src={ruby}
                title="Ruby"
                subtitle="GitHub"
                link="https://github.com/mobile"
              />
              <div className="max-w-full sm:col-span-2">
                <Icon
                  src={obsidianpersonal}
                  title="Obsidian"
                  subtitle="Personal"
                  download={true}
                  link="https://gnelson.gumroad.com/l/obsidian-3"
                />
              </div>
              <Icon
                src={holo}
                title="Holo"
                subtitle="GitHub"
                link="https://github.com/mobile"
              />
              <Icon
                src={zoom}
                title="Zoom"
                subtitle="Personal"
                width="400"
                download={true}
                link="https://gnelson.gumroad.com/l/zoom-icon"
              />
              <div className="max-w-full sm:col-span-2">
                <Icon
                  src={vscode}
                  title="VS Code"
                  subtitle="Personal"
                  width="800"
                  download={true}
                  link="https://gnelson.gumroad.com/l/vscode"
                />
              </div>
              <div className="max-w-full sm:col-span-2">
                <Icon
                  src={things}
                  title="Things"
                  subtitle="Personal"
                  width="800"
                  download={true}
                  link="https://gnelson.gumroad.com/l/things-icon"
                />
              </div>
              <Icon
                src={g1}
                title="G1 Chip"
                subtitle="GitHub"
                width="400"
                link="https://github.com/mobile"
              />
              <Icon
                src={camo}
                title="Camo"
                subtitle="Reincubate"
                width="400"
                link="https://reincubate.com/camo/"
              />
              <div className="max-w-full sm:col-span-2">
                <Icon
                  src={craft}
                  title="Craft"
                  subtitle="Craft Docs"
                  width="800"
                  link="https://www.craft.do"
                />
              </div>
              <Icon
                src={obsidian}
                title="Obsidian"
                subtitle="Personal"
                width="400"
                download={true}
                link="https://gnelson.gumroad.com/l/obsidian2"
              />
              <Icon
                src={earlybird}
                title="Earlybird"
                subtitle="GitHub"
                width="800"
                link="https://github.com/mobile"
              />

              <div className="max-w-full sm:col-span-2 ">
                <Icon
                  src={claquette}
                  title="Claquette"
                  subtitle="Peak Step"
                  width="800"
                  link="https://www.peakstep.com/claquette/"
                />
              </div>
              <Icon
                src={stocketa}
                title="Stocketa"
                subtitle="Stocketa"
                width="400"
                link="https://stocketa.com"
              />
              <Icon
                src={reflect}
                title="Reflect"
                subtitle="Reflect Notes"
                width="400"
                link="https://reflect.app"
              />

              <Icon
                src={hyperspace}
                title="Hyperspace"
                subtitle="GitHub"
                width="800"
                link="https://github.com/mobile"
              />
              <Icon
                src={apollo}
                title="N.E.L.S.O.N."
                subtitle="Apollo Reddit"
                width="400"
                link="https://apolloapp.io"
              />

              <Icon src={xcode} title="Xcode" subtitle="Personal" width="400" />
              <Icon
                src={slack}
                title="Slack"
                subtitle="Personal"
                width="400"
                link="https://gnelson.gumroad.com/l/slack-icon"
                download={true}
              />
            </div>
          </Section>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
