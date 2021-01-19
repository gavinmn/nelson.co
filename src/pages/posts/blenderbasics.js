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
      a daunting amount of{" "}
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
      <li>
        Hover over a corner of an editor section and your cursor will display as
        a +. Click and drag to split the section into two and select the
        dropdown icon in the upper left of any section to chose the editor type.
        Blender's UI is customizable to your liking.
      </li>
    </ul>

    <h2>Keyboard Shortcuts</h2>

    <h3>General</h3>

    <ul>
      <li>
        <code>spacebar</code> brings up a spotlight esq. menu search.
      </li>
      <li>
        <code>shift + a</code> brings up the Add menu at your cursor.
      </li>
      <li>
        <code>option + z</code> toggles x-ray view. I find this useful enough
        that I mapped it to a button on my mouse.
      </li>
      <li>
        <code>tab</code> toggles between Object mode and Edit mode. Object mode
        is used for manipulating whole meshes/objects, while edit mode will
        allow manipulation of individual vertices, edges, and faces.
        <ul>
          <li>
            In Edit mode, <code>1</code> toggles vertex selection mode,{" "}
            <code>2</code> toggles edge selection mode, and <code>3</code>{" "}
            toggles face selection mode.
          </li>
        </ul>
      </li>
      <li>
        Clicking and dragging (left/right) on a numerical input field will
        adjust the input.
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
        <code>n</code> toggles the transform panel.
      </li>
      <li>
        <code>right click</code> on a menu option to add it to your{" "}
        <code>quick favorites</code>.
        <ul>
          <li>
            <code>q</code> brings up a list of your quick favorites.
          </li>
        </ul>
      </li>
    </ul>

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
        <code>e</code> for extrude - in Edit mode, extrude selected vertices,
        edges, or faces.
      </li>
      <li>
        Holding <code>shift</code> while performing a transform will allow for
        fine adjustments.
      </li>
      <li>
        In Edit mode, with vertices selected, double pressing <code>g</code>{" "}
        will slide vertices along the connected edge.
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
        Double pressing an axis key locks the axis of transform to the objects
        normal rather than the world axis. Ex. <code>s → x → x</code> will scale
        the selected object on <em>the object's</em> x axis, rather than the
        world's x axis.
      </li>
    </ul>

    <h3>Pie Menus</h3>

    <p>
      Pie menus are circular UI selection menus that appear on a keypress at the
      cursor. Moving the cursor away from the menu's origin will select the
      designated menu item. Getting used to using these and forming muscle
      memory will speed up your workflow significantly.
    </p>

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

    <h2>Modeling</h2>

    <h3>General</h3>

    <ul>
      <li>
        <code>right click</code> an object and select <code>shade smooth</code>{" "}
        to achieve smooth shading on a curved surface.
        <ul>
          <li>
            Prevent smoothing over edges above a chosen angle by toggling{" "}
            <code>auto smooth</code> in Properties panel → Normals tab → Normals
            → Auto Smooth. This is helpful when you are working with a shape
            that needs both curves and hard edges.
          </li>
        </ul>
      </li>
      <li>
        When modeling, try to stick to creating and manipulating objects that
        are made of Quads (4 vertices per face) rather than Tris (3 vertices per
        face) or Ngons ( &gt; 4 vertices per face). This will make working with
        modifier properties easier.
        <ul>
          <li>
            The default sphere mesh is made of Tris. To create a sphere composed
            of Quads, start with a cube, apply a Subdivision Surface modifier
            with 4 subdivisions, and then apply a Cast modifier.
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

    <p>
      All Modifier Properties are found in the Modifier Properties tab of the
      Properties panel. Below are the general modifiers that I find most helpful
      for modeling. Experiment by applying them to default meshes to learn the
      ins and outs of each modifier.
      <br></br>
      <br></br>
    </p>

    <Caption>
      Note - clicking apply after selecting a modifier is a destructive action.
      Often you do not need to apply modifiers and can work non-destructively.
    </Caption>

    <ul>
      <li>
        <code>Bevel</code> - used to bevel edges of the selected object.
        <ul>
          <li>
            Bevel Limit Method - a tool to limit what edges are beveled.{" "}
            <code>Angle</code> is useful to limit beveling to only sharp edges
            (defined by a degree input). <code>Weight</code> will let you bevel
            only selected edges by weight. Weight is assigned to edges in edit
            mode in Transform panel → Edge Data.
          </li>
        </ul>
      </li>
      <li>
        <code>Subdivision Surface</code> - used to subdivide all faces of the
        selected object. Great for creating curved surfaces from angled meshes.
        <ul>
          <li>
            Assign creases to edges in edit mode in Transform panel → Edge Data.
          </li>
        </ul>
      </li>
      <li>
        <code>Solidify</code> - used to give a third dimension to two
        dimensional meshes non-destructively.
      </li>
      <li>
        <code>Mirror</code> - used to mirror a copy of a mesh over a selected
        object and axis. Use this to easily create symmetrical meshes.
      </li>
      <li>
        If you have previously explored design tools like{" "}
        <a href="https://www.sketch.com">Sketch</a> and{" "}
        <a href="https://www.figma.com">Figma</a>, you may have used the Boolean
        Operation tool. Blender has a similar <code>Boolean</code> operation
        modifier but I would recommend trying to avoid it when you are first
        starting. It has a tendency to create messy geometry in your meshes and
        screw things up when used in combo with a Subdivision modifier.
      </li>
    </ul>

    <h2>Shading</h2>

    <p>
      Open up a <code>Shader Editor</code> editor to use Blender's node based
      shading. Node editors can get complicated fast. To keep it simple, stick
      with the <code>Principled BDSF</code> shader that is added when you create
      a new material.
    </p>

    <ul>
      <li>
        The best way to learn shading is to experiment with all the sliders in
        the <code>Principled BDSF</code> node.
        <ul>
          <li>
            The primary values I find myself editing are Base Color, Metallic,
            and Roughness.
          </li>
        </ul>
      </li>
    </ul>

    <h2>Concluding Thoughts</h2>

    <p>
      Start off small. Don't jump right into creating involved models and
      complex shading trees. The learning curve for Blender can be steep, but
      getting these core basics nailed down will help make the experience
      enjoyable.{" "}
    </p>
  </PostWrapper>
)

export default BlenderBasics
