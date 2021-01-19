import React from "react"
import styled from "styled-components"
import Image from "next/image"
import PostWrapper from "../../components/postwrapper"
import CustomImage from "../../components/customimage"
import PostLink from "../../components/postlink"
import Caption from "../../components/caption"
import { device } from "../../components/device"

const BlenderBasics = props => (
  <PostWrapper
    title="Blender Basics"
    subtitle=""
    time="Published January xx, 2021"
  >
    {/* <CustomImage
      size="full"
      src="/images/index/blender.png"
      width="816"
      height="294"
    /> */}
    <p>
      Blender is a powerful,{" "}
      <a href="https://github.com/blender">open source</a> 3D creation tool with
      a large amount of{" "}
      <a href="https://docs.blender.org/manual/en/latest/">documentation</a>.
      While the comprehensive docs are wonderful, there is a <em>lot</em> of
      noise to sift through if you are new to the software. This page is
      intended to be an ongoing list of the tips and tricks that I find
      valuable.
    </p>

    <h2>General</h2>

    <Caption>My base file configuration</Caption>

    <ul>
      <li>
        Render with a transparent background by toggling{" "}
        <code>Transparent</code> in Properties panel → Render Properties tab →
        Film → Transparent.
      </li>
      <li>
        Access global contrast settings in Properties panel → Render Properties
        tab → Color Management → Look dropdown. I find bumping up the contrast
        to <code>Medium High Contrast</code> is a good starting point.
      </li>
    </ul>

    <h2>Keyboard Shortcuts</h2>

    <h3>Transform Keys</h3>

    <ul>
      <li>
        <code>g</code> for grab - move selected objects or points within the 3D
        space.
      </li>
      <li>
        <code>r</code> for rotate - rotate selected objects within the 3D space.
      </li>
      <li>
        <code>s</code> for scale - scale selected objects larger (mouse away
        from origin) or smaller (mouse towards origin).
      </li>
      <li>
        Holding <code>shift</code> while performing a transform will allow for
        fine adjustments.
      </li>
    </ul>

    <h3>Axis Keys</h3>

    <ul>
      <li>
        <code>x</code> locks a previously selected transform key transform to
        the x axis.
      </li>
      <li>
        <code>y</code> locks a previously selected transform key transform to
        the y axis.
      </li>
      <li>
        <code>z</code> locks a previously selected transform key transform to
        the z axis.
      </li>
      <li>
        <code>shift + axis key</code> locks a previously selected transform key
        transform to the other two axes. Ex. <code>g → shift + z</code> will
        allow moving the selected object on only the x and y axes.
      </li>
      <li>
        <code>double press axis key</code> locks the axis of transform to the
        objects normal rather than the world axis. Ex. <code>s → x → x</code>{" "}
        will scale the selected object on <em>the object's</em> x axis, rather
        than the world's x axis.
      </li>
    </ul>

    <h3>Pie Menus</h3>

    <p>
      Pie menus are circular UI selection menus that appear on a keypress with
      the circle's origin at the cursor. Moving the mouse outside the circle and
      clicking will select the designated menu item.* Getting used to using
      these and forming muscle memory related to which direction of mouse will
      speed up your workflow.{" "}
    </p>

    <Caption>
      * Holding the modifier key down and releasing after having moved your
      mouse towards a menu selection will result in an even faster selection.
    </Caption>

    <ul>
      <li>
        <code>~</code> invokes the viewpoint pie menu. Use this to change your
        view to the camera, selected object, or any orthographic direction.
      </li>
      <li>
        <code>z</code> invokes the viewport shading pie menu. Use this to change
        your viewport shading between wireframe, solid, material preview, and
        rendered.
      </li>
    </ul>

    <h3>Misc.</h3>

    <ul>
      <li>
        <code>spacebar</code> brings up a spotlight esq. menu search.
      </li>
      <li>
        <code>shift + a</code> brings up the add menu at your cursor.
      </li>
      <li>
        <code>option + z</code> toggles x-ray view. I find this so useful that I
        mapped it to a button on my mouse.
      </li>
      <li>
        <code>tab</code> toggles between object mode and edit mode.
      </li>
      <li>
        Clicking and dragging (left/right) on a numerical input field will
        adjust the number.
        <ul>
          <li>
            Holding <code>control</code> while doing this will lock the field to
            whole numbers (or easy decimals).
          </li>
          <li>
            Holding <code>shift</code> while doing this will allow for fine
            adjustments.
          </li>
        </ul>
      </li>
      <li>
        <code>n</code> will toggle the transform panel.
      </li>
      <li>
        <code>right click</code> on a menu toggle to surface the option to{" "}
        <code>add to quick favorites</code>.
        <ul>
          <li>
            <code>q</code> brings up a list of your quick favorites.
          </li>
        </ul>
      </li>
    </ul>

    <h2>Modeling</h2>

    <h3>General Tips</h3>

    <ul>
      <li>
        <code>right click</code> an object and select <code>shade smooth</code>{" "}
        to achieve smooth shading on a curved surface.
        <ul>
          <li>
            With the object selected, go into the Normals tab (green triangle
            with squares at the vertices icon) in the Properties panel and
            select <code>normals → auto smooth</code> to prevent smoothing over
            angles above a set degree. This is helpful when you are working with
            a shape that needs both curves and hard edges.
          </li>
        </ul>
      </li>
      <li>
        When modeling, try to stick to creating and manipulating objects that
        are made of <code>quads</code> (4 vertices per face) rather than{" "}
        <code>tris</code> (3 vertices per face) or <code>ngons</code> ( &gt; 4
        vertices per face). This will make working with modifier properties much
        easier.
        <ul>
          <li>
            The default sphere mesh will be made of tris. To create a sphere
            composed of quads, start with a cube, apply a Subdivision Surface
            modifier with 4 subdivisions, and then apply a Cast modifier.
          </li>
        </ul>
      </li>
      <li>
        <code>set origin</code> (easily accessed through the spacebar quick
        search) will allow you to change the transform origin of an object.
      </li>
      <li>
        <code>control + r</code> in Edit mode will allow you to create a loop
        cut. This is a <em>very</em> helpful tool to use when you are trying to
        manipulate meshes and need some extra vertices to work with.
      </li>
    </ul>

    <h3>Modifier Properties</h3>

    <Caption>
      All Modifier Properties are found in the Modifier Properties tab (blue
      wrench icon) of the Properties panel.
    </Caption>

    <p>
      These are the general modifiers that I find most helpful for basic
      modeling. Experiment by applying them to basic meshes to learn the ins and
      outs.
      <br></br>
      <br></br>
    </p>

    <Caption>
      Note - clicking apply after selecting a modifier is a destructive action.
      Often you do not need to apply modifiers and can work non-destructively.
    </Caption>

    <ul>
      <li>
        Bevel - used to bevel edges of the selected object.
        <ul>
          <li>
            Bevel Limit Method - a helpful tool to limit what edges are beveled.{" "}
            <code>Angle</code> is useful to limit beveling to only sharp edges
            (defined by a degree input). <code>Weight</code> will let you bevel
            only selected edges by weight. Weight is assigned to edges in edit
            mode in the transform panel under &quot;Edge Data.&quot;
          </li>
        </ul>
      </li>
      <li>
        Subdivision Surface - used to subdivide all faces of the selected
        object. Great for creating curved surfaces from angled meshes.
        <ul>
          <li>
            Assign creases to edges in edit mode in the transform panel under
            &quot;Edge Data.&quot;
          </li>
        </ul>
      </li>
      <li>
        Solidify - used to give a third dimension to two dimensional meshes
        non-destructively.
      </li>
      <li>
        Mirror - used to mirror a copy of a mesh over a selected object and
        axis. Use this to easily create symmetrical meshes.
      </li>
    </ul>

    <p>
      If you have previously explored design tools like{" "}
      <a href="https://www.sketch.com">Sketch</a> and{" "}
      <a href="https://www.figma.com">Figma</a>, you may have used the Boolean
      Operation tool. Blender has a similar boolean operation modifier, but I
      would recommend trying to avoid it when you are first starting. It has a
      tendency to create messy geometry in your meshes and screw things up when
      used in combo with a Subdivision modifier.{" "}
    </p>
  </PostWrapper>
)

export default BlenderBasics
